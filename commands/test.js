const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('Tells you if you are "Smart" or not.'),
	async execute(interaction) {
		// Check if the user is "Smart"
		const userId = interaction.member.user.id;
		const isSmart = userId === '656306008163090460';

		// Respond based on whether the user is "Smart" or not
		if (isSmart) {
			await interaction.reply('You are Smart!');
		} else {
			await interaction.reply('You are not Smart.');
		}
	},
};