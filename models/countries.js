/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('countries', {
		countryId: {
			type: DataTypes.INTEGER(5).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			field: 'countryId'
		},
		countryName: {
			type: DataTypes.STRING(135),
			allowNull: false,
			unique: true,
			field: 'countryName'
		},
		dial: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			unique: true,
			field: 'dial'
		},
		languages: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'languages'
		},
		currencyName: {
			type: DataTypes.STRING(45),
			allowNull: false,
			field: 'currencyName'
		},
		capital: {
			type: DataTypes.STRING(135),
			allowNull: false,
			field: 'capital'
		},
		regionName: {
			type: DataTypes.STRING(135),
			allowNull: false,
			field: 'regionName'
		},
		alpha2Codes: {
			type: DataTypes.STRING(2),
			allowNull: false,
			field: 'alpha2Codes'
		},
		alpha3Codes: {
			type: DataTypes.STRING(3),
			allowNull: false,
			field: 'alpha3Codes'
		},
		numberCodes: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'numberCodes'
		},
		currencyCode: {
			type: DataTypes.STRING(5),
			allowNull: false,
			field: 'currencyCode'
		},
		minorUnits: {
			type: DataTypes.INTEGER(3).UNSIGNED,
			allowNull: false,
			field: 'minorUnits'
		},
		currencyNumericCode: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'currencyNumericCode'
		},
		countryFormalName: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'countryFormalName'
		},
		countryShortName: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'countryShortName'
		},
		timeZone: {
			type: DataTypes.STRING(5),
			allowNull: false,
			field: 'timeZone'
		}
	}, {
		tableName: 'countries'
	});
};
