const vt = require('./libs/auth');

exports.verifyJWTToken_MW = (req, res, next) => {
    let token = req.headers.token;
    vt.verifyJWTToken(token).then(decodedToken => {
        req.user = decodedToken.data;
        console.log('Inside verifyJWTToken. Token verified.');
        next();
    }).catch(err => {
        res.status(400).send({message: 'Token invalido'})
    })
};
