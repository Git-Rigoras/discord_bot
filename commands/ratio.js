const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ratio')
        .setDescription('didn\'t ask'),
    async execute(interaction) {
        await interaction.reply("didn't ask + you female + don't care + ration + i fell + trollé")
    },
}