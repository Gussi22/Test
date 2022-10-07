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
};
