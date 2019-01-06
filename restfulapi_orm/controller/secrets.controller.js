const db = require('../config/db.config.js');
const crypto = require('crypto');
const Secrets = db.profs_access;

exports.validate = (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    Secrets.findOne({
        attributes: [ 'id', 'user_name' ],
        where: {
            user_name: username,
            user_passwd: crypto.createHash('sha1').update(password).digest('hex'),
        }
    }).then(result => {
        if (result != null) {
            res.send({ error: false, data: result, message: 'Everything OK'});
        } else {
            res.send({ error: true, id: 0, message: 'Authentication failure'});
        }
    })
};
