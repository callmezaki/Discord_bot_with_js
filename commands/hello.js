const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription('Replies with sir t9awed!'),
	async execute(interaction) {
		await interaction.reply('siir t9awed');
	},
};