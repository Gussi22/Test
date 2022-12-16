const {  CommandInteraction, MessageEmbed } = require("discord.js");
const DB = require("../../../Structures/Schemas/Movie/movieList");
const sourcebin = require("sourcebin");

module.exports = {
	subCommand: "movies.show",
	/**
	 * 
	 * @param {CommandInteraction} interaction 
	 */
	async execute(interaction) {
		await interaction.deferReply();
		const { user } = interaction;

		const Data = await DB.findOne({ _id: user.id });

		if (!Data) {
			return interaction.editReply({ content: "You have not listed any movies", ephemeral: true });
		}

		const Upcoming = await sourcebin.create(
			{
				title: `${user.username} | Upcoming List`,
				description: "This is your upcoming list",
				files: [
					{
						content: `${Data.Upcoming.map((w) => w).join("\n") || "none"}`,
						language: 'text'
					}
				]
			}
		)

		const Watching = await sourcebin.create(
			{
				title: `${user.username} | Watching List`,
				description: "This is your watching list",
				files: [
					{
						content: `${Data.Watching.map((w) => w).join("\n") || "none"}`,
						language: 'text'
					}
				]
			}
		)

		const Watched = await sourcebin.create(
			{
				title: `${user.username} | Watched List`,
				description: "This is your watched list",
				files: [
					{
						content: `${Data.Watched.map((w) => w).join("\n") || "none"}`,
						language: 'text'
					}
				]
			}
		)

		await interaction.editReply({
			embeds: [
				new MessageEmbed()
					.setAuthor({ name: `${user.tag} - ${user.id}`, iconURL: user.displayAvatarURL({ dynamic: true })})
					.setDescription("Here are your movie lists:")
					.setColor("BLUE")
					.addFields(
						{
							name: "Upcoming",
							value: Upcoming.shortUrl,
							inline: true
						},
						{
							name: "Watching",
							value: Watching.shortUrl,
							inline: true
						},
						{
							name: "Watched",
							value: Watched.shortUrl,
							inline: true
						}
					)
			]
		})
	}
}