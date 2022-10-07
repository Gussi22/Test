const { CommandInteraction, Client } = require("discord.js");

module.exports = {
  subCommand: "emit.member",
  /**
   *
   * @param {CommandInteraction} interaction
   * @param {Client} client
   */
  execute(interaction, client) {
    switch (interaction.options.getString("type")) {
      case "guildMemberAdd":
        {
          client.emit("guildMemberAdd", interaction.member);
        }
        break;
      case "guildMemberRemove":
        {
          client.emit("guildMemberRemove", interaction.member);
        }
        break;
      case "guildMemberUpdate":
        {
          client.emit("guildMemberUpdate", interaction.member);
        }
        break;
    }
    interaction.reply({ content: "Event emitted!", ephemeral: true });
  },
};
