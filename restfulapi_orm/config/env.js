const env = {
    host: '127.0.0.1',
    // port: 8088,
    socketPath: '/var/run/mysqld/mysqld.sock',
    database: '2018_2019',
    database1: 'biblioteca',
    database2: 'secrets',
    username: 'root',
    password: 'Hbn678%&00^',
    logging: false,
    dialect: 'mysql',
    pool: {
        max: 4,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
module.exports = env;
