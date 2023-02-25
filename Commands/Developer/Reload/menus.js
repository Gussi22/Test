const { CommandInteraction, Client } = require("discord.js");
const { loadMenus } = require("../../../Structures/Handlers/Menus");

module.exports = {
	subCommand: "reload.menus",
	/**
	 * 
	 * @param {CommandInteraction} interaction 
	 * @param {Client} client 
	 */
	execute(interaction, client) {
		loadMenus(client)
		interaction.reply({ content: "Reloaded Menus!", ephemeral: true})
	}
}