const jwt = require('jsonwebtoken');
const env = require('../config/env');
const _ = require('lodash');

//module.exports = function verifyJWTToken(token) {
exports.verifyJWTToken = (token) => {
    return new Promise((resolve, reject) => {
       jwt.verify(token, env.JWT_SECRET, (err, decodedToken) =>
       {
           if (err || !decodedToken) {
               return reject(err);
            }
            resolve(decodedToken)
       });
    });
};

//module.exports = function createJWTToken(details) {
exports.createJWTToken = (details) => {
    if (typeof details !== 'object') {
        details = {};
    }
    if (!details.maxAge || typeof details.maxAge !== 'number') {
        details.maxAge = 3600;
    }
    /*
    details.sessionData = _.reduce(details.sessionData || {}, (memo, val, key) => {
        if (typeof val !== "function" && key !== "password") {
            memo[key] = val;
        }
        return memo;
    }, {});
    */
    let token = jwt.sign({data: details.sessionData}, env.JWT_SECRET, {
        expiresIn: details.maxAge,
        algorithm: 'HS256'
    });
    return token;
}
