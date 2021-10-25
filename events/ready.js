/**
 * This file emits a log message on the ready event.
 */
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		client.user.setActivity('activity', { type: 'WATCHING' });
	},
};