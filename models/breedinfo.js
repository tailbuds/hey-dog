/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'breedInfo',
    {
      breedId: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        field: 'breedId',
      },
      name: {
        type: DataTypes.STRING(65),
        allowNull: false,
        unique: true,
        field: 'name',
      },
      tagline: {
        type: DataTypes.STRING(135),
        allowNull: false,
        field: 'tagline',
      },
      bgImg: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'bgImg',
      },
      puppyImg: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'puppyImg',
      },
      minLife: {
        type: DataTypes.INTEGER(3).UNSIGNED,
        allowNull: false,
        field: 'minLife',
      },
      maxLife: {
        type: DataTypes.INTEGER(3).UNSIGNED,
        allowNull: false,
        field: 'maxLife',
      },
      learningRate: {
        type: DataTypes.STRING(25),
        allowNull: false,
        field: 'learningRate',
      },
      minLitter: {
        type: DataTypes.INTEGER(3).UNSIGNED,
        allowNull: false,
        field: 'minLitter',
      },
      maxLitter: {
        type: DataTypes.INTEGER(3).UNSIGNED,
        allowNull: false,
        field: 'maxLitter',
      },
      size: {
        type: DataTypes.STRING(45),
        allowNull: false,
        field: 'size',
      },
      weightUnit: {
        type: DataTypes.INTEGER(3).UNSIGNED,
        allowNull: false,
        references: {
          model: 'measurementUnits',
          key: 'measureId',
        },
        field: 'weightUnit',
      },
      minMaleWeight: {
        type: DataTypes.INTEGER(5).UNSIGNED,
        allowNull: false,
        field: 'minMaleWeight',
      },
      maxMaleWeight: {
        type: DataTypes.INTEGER(5).UNSIGNED,
        allowNull: false,
        field: 'maxMaleWeight',
      },
      minFemaleWeight: {
        type: DataTypes.INTEGER(5).UNSIGNED,
        allowNull: false,
        field: 'minFemaleWeight',
      },
      maxFemaleWeight: {
        type: DataTypes.INTEGER(5).UNSIGNED,
        allowNull: false,
        field: 'maxFemaleWeight',
      },
      heightUnit: {
        type: DataTypes.INTEGER(3).UNSIGNED,
        allowNull: false,
        references: {
          model: 'measurementUnits',
          key: 'measureId',
        },
        field: 'heightUnit',
      },
      minMaleHeight: {
        type: DataTypes.INTEGER(5).UNSIGNED,
        allowNull: false,
        field: 'minMaleHeight',
      },
      maxMaleHeight: {
        type: DataTypes.INTEGER(5).UNSIGNED,
        allowNull: false,
        field: 'maxMaleHeight',
      },
      minFemaleHeight: {
        type: DataTypes.INTEGER(5).UNSIGNED,
        allowNull: false,
        field: 'minFemaleHeight',
      },
      maxFemaleHeight: {
        type: DataTypes.INTEGER(5).UNSIGNED,
        allowNull: false,
        field: 'maxFemaleHeight',
      },
      originCountry: {
        type: DataTypes.INTEGER(5).UNSIGNED,
        allowNull: false,
        references: {
          model: 'countries',
          key: 'countryId',
        },
        field: 'originCountry',
      },
      otherNames: {
        type: DataTypes.STRING(255),
        allowNull: true,
        field: 'otherNames',
      },
      desc1: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'desc1',
      },
      decs2: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'decs2',
      },
      desc3: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'desc3',
      },
      desc4: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'desc4',
      },
      desc5: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'desc5',
      },
      desc6: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'desc6',
      },
      desc7: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'desc7',
      },
      desc8: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'desc8',
      },
      desc9: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'desc9',
      },
      desc10: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'desc10',
      },
      desc11: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'desc11',
      },
      desc12: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'desc12',
      },
      desc13: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'desc13',
      },
      desc14: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'desc14',
      },
      desc15: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'desc15',
      },
      createdOn: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        field: 'createdOn',
      },
      updatedOn: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal(
          'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
        ),
        field: 'updatedOn',
      },
    },
    {
      tableName: 'breedInfo',
    }
  );
};
