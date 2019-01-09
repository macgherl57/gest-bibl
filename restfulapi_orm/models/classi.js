/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('classi', {
    class: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    }
  }, {
    tableName: 'classi',
    timestamps: false,
  });
};
