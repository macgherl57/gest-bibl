/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('riviste', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    rivista_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    anno: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    periodicita: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    annata: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    numero_fasc: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    data_di_arrivo: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    note: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    manca: {
      type: DataTypes.STRING(25),
      allowNull: true
    }
  }, {
    tableName: 'riviste',
    timestamps: false
  });
};
