var mysql = require('mysql');
var state = {
    pool: null,
    mode: null,
}

exports.connect = function(done) {
    state.pool = mysql.createPool({
        socketPath: '/var/run/mysqld/mysqld.sock',
        user: 'test1',
        password: 'cLIWw9V10??!!123',
        database: 'biblioteca',
    });
    done();
}

exports.get = function() {
    return state.pool;
}
