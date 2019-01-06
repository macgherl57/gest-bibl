/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('schedario2_copy2', {
    N: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    autore: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    titolo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    traduzione_da: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    curatore: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pubblicazione: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    data: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    descrizione_fisica: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    altre_responsabilita: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    serie: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    fapartedi: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    soggetto: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    ISBN: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    collocazione: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    N_inventario: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    N_facile_consumo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    data_scheda: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    N_registro_ingressi: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    prezzo: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    annotazioni: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    prezzo_euro: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    tableName: 'schedario2_copy2',
    timestamps: false
  });
};
