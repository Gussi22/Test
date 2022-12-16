const { CommandInteraction, MessageEmbed } = require("discord.js");
const DB = require("../../../Structures/Schemas/Movie/movieList");

module.exports = {
	subCommand: "movies.add",
	/**
	 * 
	 * @param {CommandInteraction} interaction 
	 */
	async execute(interaction) {
		const { user, options } = interaction;

		const movie = options.getString("title");
		const choice = options.getString("to");

		let userData = await DB.findOne({ _id: user.id });

		const Embed = new MessageEmbed()
			.setAuthor({ name: `${user.tag} - ${user.id}`, iconURL: user.displayAvatarURL({ dynamic: true })});

		if (!userData) {
			userData = await DB.create({
				_id: user.id,
			})
		} else {
			switch (choice) {
				case "upcoming": {
					userData.Upcoming.push(movie) && (await userData.save());
					interaction.reply({
						embeds: [
							Embed
								.setTitle("Added To Upcoming")
								.setDescription(`The movie **${movie}** has been added to your upcoming list!`)
								.setColor("BLUE")
						],
						ephemeral: true
					})
				}
				break;
				case "watching": {
					if (userData.Upcoming.includes(movie)) {
						userData.Upcoming.remove(movie);
					}

					userData.Watching.push(movie);
					await userData.save();
					interaction.reply({
						embeds: [
							Embed
								.setTitle("Added to Watching")
								.setDescription(`The movie **${movie}** has been added to your watching list!`)
								.setColor("BLUE")
						],
						ephemeral: true
					})
				}
				break;
				case "watched": {
					if (userData.Watching.includes(movie)) {
						userData.Watching.remove(movie);
					}

					userData.Watched.push(movie);
					await userData.save();
					interaction.reply({
						embeds: [
							Embed
								.setTitle("Added to Watched")
								.setDescription(`The movie **${movie}** has been added to your watched list!`)
								.setColor("BLUE")
						],
						ephemeral: true
					})
				}
				break;
			}
		}
	}
}