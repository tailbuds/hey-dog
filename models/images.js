/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('images', {
		breedId: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'breedInfo',
				key: 'breedId'
			},
			field: 'breedID'
		},
		img1: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'img1'
		},
		img2: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'img2'
		},
		img3: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'img3'
		},
		img4: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'img4'
		},
		img5: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'img5'
		},
		img6: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'img6'
		},
		img7: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'img7'
		},
		img8: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'img8'
		},
		img9: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'img9'
		}
	}, {
		tableName: 'images'
	});
};
