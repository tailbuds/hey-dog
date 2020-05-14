/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('images', {
    'breedID': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "null",
      references: {
        model: 'breedinfo',
        key: 'breedId'
      }
    },
    'img1': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'img2': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'img3': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'img4': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'img5': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'img6': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'img7': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'img8': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'img9': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'images'
  });
};
