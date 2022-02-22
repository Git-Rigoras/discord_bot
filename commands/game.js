const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('game')
        .setDescription('Play connect 4 !'),
    async execute(interaction) {
        const fieldSize = 8;
        const [black, red, blue] = ['⚫', '🔴', '🔵'];
        const reactions = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣"];
        let arrayOfReds = [];
        let arrayOfBlues = [];
        let currentField = "";
        for(let i = 0; i < fieldSize; i++) {
            for(let j = 0; j < fieldSize; j++) {
                currentField+=black;
            }
            currentField+="\n"
        }
        await interaction.reply("Loading game field...");
        let field = await interaction.followUp(currentField)
        .then(message => {
            for(i of reactions) message.react(i);
        })
        field.awaitReaction((reaction, user) => console.log(reaction,user));
        await interaction.deleteReply();
    },
}