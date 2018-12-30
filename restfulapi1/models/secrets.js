var db = require('../db');
exports.validate = function(user, password, done) {
    let query = "SELECT id, user_name FROM secrets.profs_access WHERE user_name = ? AND user_passwd = SHA1(?)";
    db.get().query(query, [user, password], function(error, result, fields) {
        if (error) {
            return done(error);
        }
        done(false, result, fields);
    });
}