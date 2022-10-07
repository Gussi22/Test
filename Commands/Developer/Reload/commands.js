const { CommandInteraction, Client } = require("discord.js");
const { loadCommands } = require("../../../Structures/Handlers/Command");

module.exports = {
  subCommand: "reload.commands",
  /**
   *
   * @param {CommandInteraction} interaction
   * @param {Client} client
   */
  execute(interaction, client) {
    loadCommands(client);
    interaction.reply({ content: "Reloaded Commands!", ephemeral: true });
  },
};
