/**
 * This file adds a role if they were a former member of the server and their
 * user_id is in the database. 
 * https://discord.js.org/#/docs/main/stable/class/GuildMember
 */
const { guildId } = require('../config.json');
const { User } = require('../db-objects');

module.exports = {
	name: 'guildMemberAdd',
	async execute(member, client) {
		const { id } = member;

		// Check if user was a former member by searching for their user ID in database
		const user = await User.findOne({ where: { user_id: id } });

		// User was a former member of the server
		if (user !== null) {
			// Add role
			const guild = client.guilds.cache.get(guildId);
			const role = guild.roles.cache.find(role => role.name.toLowerCase() === "rejoined");
			const member = guild.members.cache.get(id);
			member.roles.add(role);

			// Delete user from db
			await User.destroy({
				where: { user_id: id },
			});
		}
	},
};