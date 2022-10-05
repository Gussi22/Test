const { CommandInteraction, Client } = require("discord.js");

module.exports = {
  name: "emit",
  description: "Event emitter",
  permission: "ADMINISTRATOR",
  options: [
    {
      name: "member",
      description: "Guild member events",
      type: "SUB_COMMAND",
      options: [
        {
          name: "type",
          type: "STRING",
          description: "Select a guild member event",
          choices: [
            {
              name: "guildMemberAdd",
              value: "guildMemberAdd",
            },
            {
              name: "guildMemberRemove",
              value: "guildMemberRemove",
            },
            {
              name: "guildMemberUpdate",
              value: "guildMemberUpdate",
            },
          ],
        },
      ],
    },
    {
      name: "guild",
      description: "General guild event",
      type: "SUB_COMMAND",
      options: [
        {
          name: "type",
          type: "STRING",
          description: "Select a guild event",
          choices: [
            {
              name: "guildCreate",
              value: "guildCreate",
            },
          ],
        },
      ],
    },
  ],
  /**
   *
   * @param {CommandInteraction} interaction
   * @param {Client} client
   */
  execute(interaction, client) {
    switch (interaction.options.getSubcommand()) {
      case "member":
        {
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
            case "guildMemberAdd":
              {
                client.emit("guildMemberUpdate", interaction.member);
              }
              break;
          }
        }
        break;
      case "guild": {
        switch (interaction.options.getString("type")) {
          case "guildCreate": {
            client.emit("guildCreate", interaction.guild);
          }
        }
      }
    }
    interaction.reply({ content: "Event emitted!", ephemeral: true });
  },
};
