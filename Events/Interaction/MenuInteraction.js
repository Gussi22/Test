const { SelectMenuInteraction } = require("discord.js");

module.exports = {
	name: "interactionCreate",
	loadName: "Menu Interaction",
	/**
	 * 
	 * @param {SelectMenuInteraction} interaction 
	 */
	execute(interaction, client) {
		if (!interaction.isSelectMenu()) return;
		const Menu = client.menus.get(interaction.customId);

		if (!Menu) return;

		if (Menu.permission && !interaction.member.permissions.has(Menu.permission))
			return interaction.reply({ content: "You do not have the right permissions for this menu!", ephemeral: true});

		if (Menu.ownerOnly && interaction.member.id !== interaction.guild.ownerId)
			return interaction.reply({ content: "You are not the owner of the server!", ephemeral: true });

		Menu.execute(interaction, client);
	}
}