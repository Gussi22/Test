const { CommandInteraction, MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
	name: "meme",
	description: "Send a random meme",
	/**
	 * 
	 * @param {CommandInteraction} interaction 
	 */
	async execute(interaction) {
		const url = await fetch("https://www.reddit.com/r/meme/random/.json");
		const random = await url.json();
		const link = random[0].data.children[0].data.permalink;

		await interaction.reply({
			embeds: [
				new MessageEmbed()
					.setTitle(`${random[0].data.children[0].data.title}`)
					.setURL(`https://reddit.com${link}`)
					.setColor("RANDOM")
					.setImage(random[0].data.children[0].data.url)
					.setFooter({
						text: `👍 ${random[0].data.children[0].data.ups} | 💬 ${random[0].data.children[0].data.num_comments}`
					})
			]
		})
	}
}