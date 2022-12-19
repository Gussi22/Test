const { GuildMember, MessageEmbed } = require("discord.js");

module.exports = {
	name: "guildMemberAdd",
	loadName: "Welcome",
	/**
	 * 
	 * @param {GuildMember} member 
	 */
	async execute(member) {
		const { user, guild } = member;

		if (member.user.bot) return;

		guild.systemChannel.send({
			embeds: [
				new MessageEmbed()
					.setColor("FFC0CB")
					.setAuthor({
						name: user.tag,
						iconURL: user.displayAvatarURL({ dynamic: true, size: 512 })
					})
					.setThumbnail(user.displayAvatarURL({ dynamic: true, size: 512 }))
					.setDescription(`Welcome ${member} to **${guild.name}**!`)
					.addFields(
						{
							name: "Account Created:",
							value: `<t:${parseInt(user.createdTimestamp / 1000)}:D> | <t:${parseInt(user.createdTimestamp / 1000)}:R>`,
							inline: true
						},
						{
							name: "Latest Member Count:",
							value: `${guild.memberCount}`,
							inline: true
						}
					)
					.setFooter({ text: `ID: ${user.id}` })
			]
		});
	}
}