const { CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
	name: "hugs",
	description: "Hugs a user",
	options: [
		{
			name: "target",
			description: "Enter the target user to slap",
			type: "USER",
			required: true
		}
	],
	/**
	 * 
	 * @param {CommandInteraction} interaction 
	 */
	async execute(interaction) {
		const { options } = interaction;
		const Target = options.getMember("target");
		let img = [
			"https://gifimage.net/wp-content/uploads/2017/09/anime-comfort-hug-gif-14.gif",
      "https://c.tenor.com/1fXGbo7KvNUAAAAC/tenor.gif",
      "https://gifimage.net/wp-content/uploads/2017/09/anime-comfort-hug-gif-11.gif",
      "https://acegif.com/wp-content/uploads/anime-hug.gif"
		];

		switch(Target) {
			case null: {
				interaction.reply({
					embeds: [
						new MessageEmbed()
							.setColor("RED")
							.setDescription("🟥 No tarted given to hug")
					],
					ephemeral: true
				})
			}
			break;
			case interaction.member: {
				interaction.reply({
					embeds: [
						new MessageEmbed()
							.setColor("LUMINOUS_VIVID_PINK")
							.setDescription(`${interaction.member} has hugged themselves!`)
							.setImage(img[Math.floor(Math.random() * img.length)])
					]
				});
			}
			break;
			default: {
				interaction.reply({
					embeds: [
						new MessageEmbed()
							.setColor("LUMINOUS_VIVID_PINK")
							.setDescription(`${interaction.member} has hugged ${Target}!`)
							.setImage(img[Math.floor(Math.random() * img.length)])
					]
				})
			}
		}
	}
}