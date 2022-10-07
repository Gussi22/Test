const { CommandInteraction, Client } = require("discord.js");

module.exports = {
  subCommand: "emit.guild",
  /**
   *
   * @param {CommandInteraction} interaction
   * @param {Client} client
   */
  execute(interaction, client) {
    switch (interaction.options.getString("type")) {
      case "guildCreate":
        {
          client.emit("guildCreate", interaction.guild);
        }
        break;
    }
    interaction.reply({ content: "Event emitted!", ephemeral: true });
  },
};
