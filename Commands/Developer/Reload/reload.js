module.exports = {
  name: "reload",
  description: "Reload your commands/events",
  permission: "ADMINISTRATOR",
  options: [
    {
      name: "events",
      description: "Reload your events",
      type: "SUB_COMMAND",
    },
    {
      name: "commands",
      description: "Reload your commands",
      type: "SUB_COMMAND",
    },
  ],
};
