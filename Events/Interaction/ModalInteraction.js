const { ModalSubmitInteraction } = require("discord.js");

module.exports = {
	name: "interactionCreate",
	loadName: "Modal Interaction",
	/**
	 * 
	 * @param {ModalSubmitInteraction} interaction 
	 */
	execute(interaction, client) {
		if (!interaction.isModalSubmit()) return;
		const Modal = client.modals.get(interaction.customId);

		if (!Modal) return;

		if (Modal.permission && !interaction.member.permissions.has(Modal.permission)) {
			return interaction.reply({
				content: "You do not have the right permissions for this modal!",
				ephemeral: true
			});
		}

		if (Modal.ownerOnly && interaction.member.id !== interaction.guild.ownerId) {
			return interaction.reply({
				content: "You are not the owner of the server!",
				ephemeral: true
			});
		}

		Modal.execute(interaction, client);
	}
}