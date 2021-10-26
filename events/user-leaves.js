/**
 * This file adds a user's ID to the database when they leave the server.
 * https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberRemove
 */
const { User } = require('../db-objects');

module.exports = {
	name: 'guildMemberRemove',
	async execute(member) {
		const { id } = member;

		try {
		// Add user_id to database
		await User.create({ user_id: id });
		} catch(error) {
			console.log(error);
		}
	},
};