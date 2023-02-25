const { CommandInteraction, Client } = require("discord.js");
const { loadModals } = require("../../../Structures/Handlers/Modals");

module.exports = {
	subCommand: "reload.modals",
	/**
	 * 
	 * @param {CommandInteraction} interaction 
	 * @param {Client} client 
	 */
	execute(interaction, client) {
		loadModals(client);
		interaction.reply({ content: "Reloaded Modals!", ephemeral: true })
	}
}