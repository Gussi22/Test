const { CommandInteraction, MessageEmbed } = require("discord.js");
const axios = require("axios");

module.exports = {
	subCommand: "anime.character",
	/**
	 * 
	 * @param {CommandInteraction} interaction 
	 */
	async execute(interaction, client) {
		let response = await axios.get(`https://animechan.vercel.app/api/random/character?name=${interaction.options.getString("query")}`);
		let joke = response.data;
		
		interaction.reply({
			embeds: [
				new MessageEmbed()
					.setColor("RANDOM")
					.setTitle(joke.character)
					.setDescription(`\`\`\`${joke.quote}\`\`\``)
					.setFooter({ text: joke.anime })
			]
		})
	}
}