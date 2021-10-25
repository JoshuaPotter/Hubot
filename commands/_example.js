const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('commandname')
		.setDescription('Command description.'),
	async execute(interaction) {
		console.log(interaction);
	},
};