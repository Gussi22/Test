const {
	ButtonInteraction,
	MessageActionRow,
	MessageButton
} = require("discord.js");
const DB = require("../../Structures/Schemas/Code Share/codeShare");

module.exports = {
	id: "accept-share",
	permission: "MANAGE_THREADS",
	/**
	 * 
	 * @param {ButtonInteraction} interaction 
	 */
	async execute(interaction) {
		const { guildId, message, client } = interaction;

		const btn = new MessageActionRow().addComponents(
			new MessageButton()
				.setCustomId("archive-thread")
				.setLabel("Archive")
				.setStyle("PRIMARY"),
			new MessageButton()
				.setCustomId("unarchive-thread")
				.setLabel("Unarchive")
				.setStyle("SECONDARY")
		);

		DB.findOne(
			{ GuildID: guildId, MessageID: message.id },
			async (err, data) => {
				if (err) throw err;
				if (!data) {
					return interaction.reply({
						content: "No such data in the database",
						ephemeral: true
					});
				}

				message.edit({ components: [] });
				message.react("👍");
				message.react("👎");

				client.channels.cache
					.get(data.ThreadID)
					.edit({
						archived: false,
						locked: false
					})
					.then(async (newThread) => {
						const message = await newThread.send({
							content: `<@${data.MemberID}> control your thread using these buttons`,
							components: [btn]
						});
						message.pin();
					});

				interaction.reply({ content: "Thread accepted", ephemeral: true });

				await DB.findOneAndDelete({ MessageID: message.id });
			}
		)
	}
}