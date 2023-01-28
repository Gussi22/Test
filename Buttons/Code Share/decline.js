const {
	ButtonInteraction,
	Modal,
	TextInputComponent,
	MessageActionRow
} = require("discord.js");
const DB = require("../../Structures/Schemas/Code Share/codeShare");

module.exports = {
	id: "decline-share",
	permission: "MANAGE_THREADS",
	/**
	 * 
	 * @param {ButtonInteraction} interaction 
	 */
	async execute(interaction) {
		const { message, guild } = interaction;

		const modal = new Modal()
			.setCustomId("code-share")
			.setTitle("Reason for Decline")
			.addComponents(
				new MessageActionRow().addComponents(
					new TextInputComponent()
						.setCustomId("reason-code")
						.setLabel("Enter Reason")
						.setStyle("SHORT")
						.setRequired(true)
				)
			);

		DB.findOne(
			{ GuildID: guild.id, MessageID: message.id },
			async (err, data) => {
				if(err) throw err;
				if (!data)
					return interaction.reply({
						content: "Data does not exist!",
						ephemeral: true
					});

				interaction.showModal(modal);
			}
		)
	}
}