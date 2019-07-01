const db = require('../config/db.config.js');
const crypto = require('crypto');
const Secrets = db.profs_access;
const sc = require('../libs/auth');

exports.validate = (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    if (!username.match(/preside|roncucci|gherlone|pirri|persich/i)) {
        res.send({ error: true, data: {id: 0}, message: 'Authentication failure'});
        return;
    }
    Secrets.findOne({
        attributes: [ 'id', 'user_name' ],
        where: {
            user_name: username,
            user_passwd: crypto.createHash('sha1').update(password).digest('hex'),
        }
    }).then(result => {
        if (result != null) {
            res.send({ error: false, data: result, token: sc.createJWTToken({
                sessionData: result['user_name'],
                maxAge: 3600
            })
        });
        } else {
            res.send({ error: true, data: {id: 0}, message: 'Authentication failure'});
        }
    })
};
