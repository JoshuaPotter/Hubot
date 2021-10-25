/**
 * This file creates database tables from models.
 * Instructions: You only need to run node dbInit.js once. You should only run it again if you add or edit models.
 * If you change a model, you can execute node dbInit.js --force or node dbInit.js -f to force sync tables. It will empty and remake your model tables.
 * Otherwise, do not use the force flag.
 */
const Sequelize = require('sequelize');
const { storage: { host, database, user, password } } = require('./config.json');

// Initialize database
const sequelize = new Sequelize(database, user, password, {
	host: host,
	dialect: 'mysql',
});

// Test connection
try {
	sequelize.authenticate();
} catch (error) {
	console.error('Unable to connect to the database:', error);
}

require('./models/User.js')(sequelize, Sequelize.DataTypes);

const force = process.argv.includes('--force') || process.argv.includes('-f');

sequelize.sync({ force }).then(async () => {
	console.log('Database synced');
	sequelize.close();
}).catch(console.error);