const { SelectMenuInteraction, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const DB = require("../../Structures/Schemas/Setup/setup");

module.exports = {
	id: "setup",
	permission: "MANAGE_GUILD",
	/**
	 * 
	 * @param {SelectMenuInteraction} interaction 
	 */
	async execute(interaction) {
		const system = interaction.values[0];

		let guildData = await DB.findOne({ _id: interaction.guild.id });

		if (!guildData) {
			guildData = await DB.create({
				_id: interaction.guild.id,
				Welcome: {
					Enabled: false,
					Channel: null
				}
			})
		}

		const Embed = new MessageEmbed().setColor("#FEBF10");
		const Buttons = new MessageActionRow().addComponents(
			new MessageButton()
				.setCustomId("setup-back")
				.setLabel("Back")
				.setEmoji("◀️")
				.setStyle("DANGER")
		)

		switch(system) {
			case "welcome": {
				guildData.Welcome.forEach((data) => {
					if (!data.Enabled) {
						interaction.message.edit({
							embeds: [
								Embed
									.setTitle(`${interaction.guild.name} | Welcomer System`)
									.setDescription("TEST")
							],
							components: [
								Buttons.addComponents(
									new MessageButton()
										.setCustomId("welcome-enable")
										.setLabel("Enable")
										.setStyle("SUCCESS")
								)
							]
						});
					} else {
						interaction.message.edit({
							embeds: [
								Embed
									.setTitle(`${interaction.guild.name} | Welcomer System`)
									.setDescription("TEST")
							],
							components: [
								Buttons.addComponents(
									new MessageButton()
										.setCustomId("welcome-disable")
										.setLabel("Disable")
										.setStyle("DANGER")
								)
							]
						});
					}
				})
			}
			break;
		}
	}
}