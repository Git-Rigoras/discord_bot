const { SlashCommandBuilder } = require('@discordjs/builders');
require("dotenv").config()

module.exports = {
    data: new SlashCommandBuilder()
        .setName('game')
        .setDescription('Play connect 4 !'),
    async execute(interaction) {
        const fieldSize = 8;
        const [black, red, blue] = ['⚫', '🔴', '🔵'];
        const reactions = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣"];
        const filter = (reaction, user) => {
            return reactions.includes(reaction.emoji.name)
        }
        let arrayOfReds = [];
        let arrayOfBlues = [];
        let currentField = "";
        for(let i = 0; i < fieldSize; i++) {
            for(let j = 0; j < fieldSize; j++) currentField+=black;
            currentField+="\n"
        }
        await interaction.reply({ content: "Loading game field...", ephemeral: true });
        await interaction.channel.send(currentField)
        .then(message => {
            for(i of reactions) message.react(i);
            message.awaitReactions({ filter, max: 2, time: 60000, errors: ['time'] })
            .then(collected => {
                console.log(collected)
            })
        }) 
    },
}