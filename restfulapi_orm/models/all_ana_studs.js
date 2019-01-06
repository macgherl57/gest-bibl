/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('all_ana_studs', {
    id: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    matr: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    cogn_nome: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cl: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    data_nas: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    com_nas: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ind_res: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    com_res: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    prov_res: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    rel: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    distretto: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tel: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lingua: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    scuola_prov: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sesso: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    codice_fisc: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    ind_dom: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    com_dom: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    prov_dom: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    padre: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    l_padre: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nas_padre: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    madre: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    l_madre: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nas_madre: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    giud_sms: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ris_asp: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    crediti: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'all_ana_studs',
    timestamps: false
  });
};
