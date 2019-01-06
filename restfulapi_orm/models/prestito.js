/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prestito', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    student_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    book_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    data_prelievo: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    data_1_rinnovo: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data_2_rinnovo: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data_restituzione: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data_1_soll: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data_2_soll: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    note: {
      type: DataTypes.STRING(25),
      allowNull: true
    }
  }, {
    tableName: 'prestito',
    timestamps: false
  });
};
