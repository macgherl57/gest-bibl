/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('elencoriviste', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    titolo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    anno: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    periodicita: {
      type: DataTypes.STRING(25),
      allowNull: true
    }
  }, {
    tableName: 'elencoriviste',
    timestamps: false
  });
};
