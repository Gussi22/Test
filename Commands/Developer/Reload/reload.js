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
		{
			name: "buttons",
			description: "Reload your buttons",
			type: "SUB_COMMAND"
		},
		{
			name: "modals",
			description: "Reload your modals",
			type: "SUB_COMMAND"
		}
  ],
};
