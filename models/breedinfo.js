/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('breedinfo', {
    'breedId': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'name': {
      type: DataTypes.STRING(65),
      allowNull: false,
      comment: "null",
      unique: true
    },
    'tagline': {
      type: DataTypes.STRING(135),
      allowNull: false,
      comment: "null"
    },
    'bgImg': {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "null"
    },
    'puppyImg': {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "null"
    },
    'minLife': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "null"
    },
    'maxLife': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "null"
    },
    'learningRate': {
      type: DataTypes.STRING(25),
      allowNull: false,
      comment: "null"
    },
    'minLitter': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "null"
    },
    'maxLitter': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "null"
    },
    'size': {
      type: DataTypes.STRING(45),
      allowNull: false,
      comment: "null"
    },
    'weightUnit': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "null",
      references: {
        model: 'measurementunits',
        key: 'measureId'
      }
    },
    'minMaleWeight': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "null"
    },
    'maxMaleWeight': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "null"
    },
    'minFemaleWeight': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "null"
    },
    'maxFemaleWeight': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "null"
    },
    'heightUnit': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "null",
      references: {
        model: 'measurementunits',
        key: 'measureId'
      }
    },
    'minMaleHeight': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "null"
    },
    'maxMaleHeight': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "null"
    },
    'minFemaleHeight': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "null"
    },
    'maxFemaleHeight': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "null"
    },
    'originCountry': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "null",
      references: {
        model: 'countries',
        key: 'countryId'
      }
    },
    'otherNames': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'desc1': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'decs2': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'desc3': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'desc4': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'desc5': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'desc6': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'desc7': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'desc8': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'desc9': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'desc10': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'desc11': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'desc12': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'desc13': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'desc14': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'desc15': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'createdOn': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "null"
    },
    'updatedOn': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "null"
    }
  }, {
    tableName: 'breedinfo'
  });
};
