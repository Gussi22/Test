const { CommandInteraction, Client } = require("discord.js");
const { loadButtons } = require("../../../Structures/Handlers/Buttons");

module.exports = {
	subCommand: "reload.buttons",
	/**
	 * 
	 * @param {CommandInteraction} interaction 
	 * @param {Client} client 
	 */
	execute(interaction, client) {
		loadButtons(client);
		interaction.reply({ content: "Reloaded Buttons!", ephemeral: true })
	}
}