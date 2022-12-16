const { CommandInteraction, MessageEmbed } = require("discord.js");
const DB = require("../../../Structures/Schemas/Movie/movieList");

module.exports = {
	subCommand: "movies.remove",
	/**
	 * 
	 * @param {CommandInteraction} interaction 
	 */
	async execute(interaction) {
		const { user, options } = interaction;

		const movie = options.getString("title");
		const choice = options.getString("from");

		let userData = await DB.findOne({ _id: user.id });

		if (!userData) {
			userData = await DB.create({
				_id: user.id,
			})
		} else {
			switch (choice) {
				case "upcoming": {
					if (!userData.Upcoming.includes(movie)) {
						interaction.reply({
							content: `**${movie}** does not exist in the list`,
							ephemeral: true
						});
					} else {
						userData.Upcoming.remove(movie) && (await userData.save());
						interaction.reply({
							content: `**${movie}** has been removed from the list`,
							ephemeral: true
						})
					}
				}
				break;
				case "watching": {
					if (!userData.Watching.includes(movie)) {
						interaction.reply({
							content: `**${movie}** does not exist in the list`,
							ephemeral: true
						});
					} else {
						userData.Watching.remove(movie) && (await userData.save());
						interaction.reply({
							content: `**${movie}** has been removed from the list`,
							ephemeral: true
						})
					}
				}
				break;
				case "watched": {
					if (!userData.Watched.includes(movie)) {
						interaction.reply({
							content: `**${movie}** does not exist in the list`,
							ephemeral: true
						});
					} else {
						userData.Watched.remove(movie) && (await userData.save());
						interaction.reply({
							content: `**${movie}** has been removed from the list`,
							ephemeral: true
						})
					}
				}
				break;
			}
		}
	}
}