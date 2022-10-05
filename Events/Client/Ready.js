const { Client } = require("discord.js");

module.exports = {
  name: "ready",
  loadName: "Ready",
  once: true,
  /**
   *
   * @param {Client} client
   */
  execute(client) {
    console.log(`Client signed in as: ${client.user.username}`);

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
