const { MessageEmbed, GuildMember } = require("discord.js");

module.exports = {
	name: "guildMemberRemove",
	loadName: "Goodbye",
	/**
	 * 
	 * @param {GuildMember} member 
	 */
	async execute(member) {
		const { user, guild } = member;

		if (member.user.bot) return;

		member.guild.systemChannel.send({
			embeds: [
				new MessageEmbed()
					.setColor("RED")
					.setAuthor({
						name: user.tag,
						iconURL: user.displayAvatarURL({ dynamic: true, size: 512 })
					})
					.setThumbnail(user.displayAvatarURL({ dynamic: true, size: 512 }))
					.setDescription(`${member} has left **${guild.name}**!`)
					.addFields(
						{
							name: "Joined:",
							value: `<t:${parseInt(member.joinedTimestamp / 1000)}:D> | <t:${parseInt(member.joinedTimestamp / 1000)}:R>`
						},
						{
							name: "Latest Member Count:",
							value: `${guild.memberCount}`
						}
					)
					.setFooter({ text: `ID: ${user.id}` })
			]
		})
	}
}