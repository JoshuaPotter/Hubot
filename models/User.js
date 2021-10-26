module.exports = (sequelize, DataTypes) => {
	return sequelize.define('rejoiners', {
		user_id: {
			type: DataTypes.STRING,
			unique: true,
			primaryKey: true,
		},
	});
};