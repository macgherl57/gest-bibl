var db = require('../db');
exports.showcols = function(done) {
    let query = 'SHOW COLUMNS FROM schedario2_copy2';
    db.get().query(query, function(error, results, fields) {
        if (error) {
            return done(error);
        }
        done(null, results, null);
    });
}

exports.getLibro = function(id, done) {
    let query = 'SELECT * FROM schedario2_copy2 WHERE N=?';
    db.get().query(query, id, function(error, results, fields) {
        if (error) {
            return done(error);
        }
        done(false, results, fields);
    });
}

exports.cerca = function(keyword, done) {
    let query = 'SELECT * FROM schedario2_copy2 WHERE autore REGEXP ? OR titolo REGEXP ?';
    let reg = '[[:<:]]' + keyword + '[[:>:]]';
    db.get().query(query, [reg, reg], function(error, results, fields) {
        if (error) {
            return done(error);
        }
        done(false, results, fields);
    });
}

exports.inserisci = function(body, done) {
    let query = 'INSERT INTO schedario2_copy2 SET ?';
    db.get().query(query, body, function(error, results, fields) {
        if (error) {
            return done(error);
        }
        done(false, results, fields);
    });
}
exports.edit = function(body, id, done) {
    let query = 'UPDATE schedario2_copy2 SET ? WHERE N=?';
    db.get().query(query, [body, id], function(error, results, fields) {
         if (error) {
            return done(error);
        }
        done(false, results, fields);
    });
}
