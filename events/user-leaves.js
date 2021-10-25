/**
 * This file adds a user's ID to the database when they leave the server.
 * https://discord.js.org/#/docs/main/stable/class/GuildMember
 */
const { User } = require('../db-objects');

module.exports = {
	name: 'guildMemberRemove',
	async execute(member) {
		const { id } = member;

		// Add user_id to database
		await User.create({ user_id: id });
	},
};