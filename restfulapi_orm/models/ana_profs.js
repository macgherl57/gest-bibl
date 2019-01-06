/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ana_profs', {
    id: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cogn: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    nome: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    sex: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: ''
    },
    area: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ''
    },
    classi: {
      type: DataTypes.STRING(180),
      allowNull: true
    },
    materie: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    medie: {
      type: DataTypes.ENUM('y','n'),
      allowNull: true
    },
    giorno_libero: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: 'NULL'
    },
    coord: {
      type: DataTypes.CHAR(2),
      allowNull: true,
      defaultValue: '--'
    }
  }, {
    tableName: 'ana_profs',
    timestamps: false
  });
};
