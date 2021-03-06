/**
 * This file adds a role to a user if their user_id is tracked in the database, indicating
 * they previously were a member of the server.
 * https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberAdd
 */
const { User } = require('../db-objects');

module.exports = {
	name: 'guildMemberAdd',
	async execute(member) {
		const { id } = member;

		// Check if user was a former member by searching for their user ID in database
		const user = await User.findOne({ where: { user_id: id } });

		// User is not a former member of the server.
		if (user === null) return;

		try {
			// Add role
			const roleId = '902331369726828624';
			await member.roles.add(roleId);

			// Delete user from db
			await User.destroy({
				where: { user_id: id },
			});
		} catch (error) {
			console.log(error);
		}
	},
};