const env = require('./env.js');
const Sequelize = require('sequelize');

// DB = 2018_2019
const sequelize = new Sequelize(env.database, env.username, env.password, {
  logging: env.logging,
  dialect: env.dialect,
  dialectOptions: env.dialectOptions,
  operatorsAliases: false,
  pool: {
    max: env.pool.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});
// DB = biblioteca
const sequelize1 = new Sequelize(env.database1, env.username, env.password, {
  dialect: env.dialect,
  dialectOptions: env.dialectOptions,
  operatorsAliases: false,
  pool: {
    max: env.pool.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
}); 
// DB = secrets
const sequelize2 = new Sequelize(env.database2, env.username, env.password, {
  dialect: env.dialect,
  dialectOptions: env.dialectOptions,
  operatorsAliases: false,
  logging: env.logging,
 
  pool: {
    max: env.pool.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
}); 

const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.sequelize1 = sequelize1;
db.sequelize2 = sequelize2;
// Models/tables sequelize2=secrets sequelize1=biblioteca sequelize=2018_2019
db.prestito = require('../models/prestito.js')(sequelize, Sequelize);
db.schedario = require('../models/schedario2_copy2.js')(sequelize1, Sequelize);
db.all_ana_studs = require('../models/all_ana_studs.js')(sequelize, Sequelize);
db.ana_profs = require('../models/ana_profs.js')(sequelize, Sequelize);
db.profs_access = require('../models/profs_access.js')(sequelize2, Sequelize);
db.classi = require('../models/classi.js')(sequelize, Sequelize);
// Relationships
db.prestito.belongsTo(db.all_ana_studs, { as: 'Student', foreignKey: 'student_id' });
db.prestito.belongsTo(db.ana_profs, { as: 'Prof', foreignKey: 'student_id' });
db.prestito.belongsTo(db.schedario, { as: 'Schedario', foreignKey: 'book_id' });
db.schedario.hasOne(db.prestito, { as: 'Prestito', foreignKey: 'book_id' });
db.classi.hasMany(db.all_ana_studs, { as: 'Students', foreignKey: 'cl' });

module.exports = db;
