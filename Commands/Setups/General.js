const {
	CommandInteraction,
	MessageActionRow,
	MessageSelectMenu,
	MessageEmbed
} = require("discord.js");

module.exports = {
	name: "setup",
	description: "Set up your server",
	permission: "MANAGE_GUILD",
	/**
	 * 
	 * @param {CommandInteraction} interaction 
	 */
	async execute(interaction) {
		const { guild } = interaction;

		const Menu = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId("setup")
					.setPlaceholder("Select A System")
					.setOptions(
						{label: "Music", value: "Music", emoji: "🎵"},
						{label: "Welcome", value: "Welcome", emoji: "👋"},
						{label: "Goodbye", value: "Goodbye", emoji: "🙋‍♂️"},
						{label: "Ticket", value: "Ticket", emoji: "🎟️"},
						{label: "Say-Out", value: "Say-Out", emoji: "📢"},
						{label: "Suggest", value: "Suggest", emoji: "📥"},
					)
			);

		const Embed = new MessageEmbed()
			.setTitle("Bot Setup")
			.setColor("#FEBF10")
			.setAuthor({
				name: guild.name, 
				iconURL: guild.iconURL({size: 512, dynamic: true})
			});

		interaction.channel.send({embeds: [Embed], components: [Menu]});
		interaction.reply({content: "Set-Up Menu Has Been Sent", ephemeral: true})
	}
}