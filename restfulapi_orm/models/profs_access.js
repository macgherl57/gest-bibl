/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('profs_access', {
    id: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cl: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    user_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    realm: {
      type: DataTypes.STRING(44),
      allowNull: false,
      defaultValue: ''
    },
    user_passwd: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: ''
    },
    password: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ''
    },
    apache_pwd: {
      type: DataTypes.STRING(33),
      allowNull: false,
      defaultValue: ''
    },
    passwd_plain: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    mod_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    email: {
      type: DataTypes.STRING(70),
      allowNull: true,
      defaultValue: ''
    }
  }, {
    tableName: 'profs_access',
    timestamps: false
  });
};
