const { CommandInteraction, Client } = require("discord.js");
const { loadEvents } = require("../../../Structures/Handlers/Event");

module.exports = {
  subCommand: "reload.events",
  /**
   *
   * @param {CommandInteraction} interaction
   * @param {Client} client
   */
  execute(interaction, client) {
    for (const [key, value] of client.events)
      client.removeListener(`${key}`, value, true);
    loadEvents(client);
    interaction.reply({
      content: "Reloaded Events!",
      ephemeral: true,
    });
  },
};
