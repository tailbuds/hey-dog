/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('measurementUnits', {
		measureId: {
			type: DataTypes.INTEGER(3).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			field: 'measureId'
		},
		shortName: {
			type: DataTypes.STRING(3),
			allowNull: false,
			unique: true,
			field: 'shortName'
		},
		longName: {
			type: DataTypes.STRING(20),
			allowNull: false,
			unique: true,
			field: 'longName'
		},
		measureSystem: {
			type: DataTypes.STRING(135),
			allowNull: false,
			field: 'measureSystem'
		}
	}, {
		tableName: 'measurementUnits'
	});
};
