const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('the most basic test command'),
    async execute(interaction) {
        await interaction.reply("Pong !");
    },
};