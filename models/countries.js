/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('countries', {
    'countryId': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'countryName': {
      type: DataTypes.STRING(135),
      allowNull: false,
      comment: "null",
      unique: true
    },
    'dial': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "null",
      unique: true
    },
    'languages': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'currencyName': {
      type: DataTypes.STRING(45),
      allowNull: false,
      comment: "null"
    },
    'capital': {
      type: DataTypes.STRING(135),
      allowNull: false,
      comment: "null"
    },
    'regionName': {
      type: DataTypes.STRING(135),
      allowNull: false,
      comment: "null"
    },
    'alpha2Codes': {
      type: DataTypes.STRING(2),
      allowNull: false,
      comment: "null"
    },
    'alpha3Codes': {
      type: DataTypes.STRING(3),
      allowNull: false,
      comment: "null"
    },
    'numberCodes': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null"
    },
    'currencyCode': {
      type: DataTypes.STRING(5),
      allowNull: false,
      comment: "null"
    },
    'minorUnits': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "null"
    },
    'currencyNumericCode': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null"
    },
    'countryFormalName': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'countryShortName': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'timeZone': {
      type: DataTypes.STRING(5),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'countries'
  });
};
