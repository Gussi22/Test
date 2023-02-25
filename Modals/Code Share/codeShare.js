const { ModalSubmitInteraction, MessageEmbed } = require("discord.js");
const DB = require("../../Structures/Schemas/Code Share/codeShare");

module.exports = {
	id: "code-share",
	permission: "MANAGE_THREADS",
	/**
	 * 
	 * @param {ModalSubmitInteraction} interaction 
	 */
	async execute(interaction) {
		const { guild, fields, message, client } = interaction;

		const reason = fields.getTextInputValue("reason-code");

		DB.findOne(
			{ GuildID: guild.id, MessageID: message.id },
			async (err, data) => {
				if (err) throw err;
				if (!data)
					return interaction.reply({
						content: "Data does not exist",
						ephemeral: true
					});

				client.users.cache.get(data.MemberID).send({
					embeds: [
						new MessageEmbed()
							.setAuthor({
								name: `${guild.name} | Code Share`,
								iconURL: guild.iconURL({ dynamic: true}),
							})
							.setColor("RED")
							.setTitle(`Code Share \`${data.Title}\` Declined:`)
							.setDescription(`${reason}`)
					]
				});

				await DB.findOneAndDelete({ MessageID: message.id });

				message.delete();

				interaction.reply({ content: "Code-share Deleted", ephemeral: true });
			}
		)
	}
}