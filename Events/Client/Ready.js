const { Client } = require("discord.js");
const { loadCommands } = require("../../Structures/Handlers/Command");

module.exports = {
  name: "ready",
  once: true,
  /**
   *
   * @param {Client} client
   */
  async execute(client) {
    console.log(`Client signed in as: ${client.user.username}`);

    loadCommands(client);

    client.user.setStatus("idle");

    setInterval(() => {
      let stats = [
        "Codes Run!",
        "Gussi Code",
        "Cris.p.nyato",
        "Bot Being Made",
        "The Void",
      ];
      client.user.setPresence({
        activities: [
          {
            name: stats[Math.floor(Math.random() * stats.length)],
            type: "WATCHING",
          },
        ],
      });
    }, 1000 * 60);
  },
};
