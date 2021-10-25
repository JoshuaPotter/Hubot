const Sequelize = require('sequelize');
const { storage: { host, database, user, password } } = require('./config.json');

// Initialize database
const sequelize = new Sequelize(database, user, password, {
	host: host,
	dialect: 'mysql',
});

// Get models to export
const User = require('./models/User.js')(sequelize, Sequelize.DataTypes);
module.exports = { User };