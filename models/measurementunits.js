/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('measurementunits', {
    'measureId': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'shortName': {
      type: DataTypes.STRING(3),
      allowNull: false,
      comment: "null",
      unique: true
    },
    'longName': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null",
      unique: true
    },
    'measureSystem': {
      type: DataTypes.STRING(135),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'measurementunits'
  });
};
