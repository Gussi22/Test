const { CommandInteraction } = require("discord.js");

module.exports = {
  name: "ping",
  description: "Replies with pong!",
  /**
   *
   * @param {CommandInteraction} interaction
   */
  async execute(interaction) {
    interaction.reply({ content: "Pong!", ephemeral: true });
  },
};
