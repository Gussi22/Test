const { CommandInteraction, MessageSelectMenu, MessageActionRow, MessageEmbed } = require("discord.js");

module.exports = {
	name: "setup",
	description: "Set up the bot in your server",
	permission: "MANAGE_GUILD",
	/**
	 * 
	 * @param {CommandInteraction} interaction 
	 */
	execute(interaction) {
		interaction.reply({
			embeds: [
				new MessageEmbed()
					.setTitle(`${interaction.guild.name} | Server Setup`)
					.setColor("#FEBF10")
					.setDescription("Set up the bot's systems")
			],
			components: [
				new MessageActionRow().addComponents(
					new MessageSelectMenu()
						.setCustomId("setup")
						.setPlaceholder("Select A System To Configure")
						.setOptions(
							{label: "Welcome", value: "welcome"}
						)
				)
			]
		})
	}
}