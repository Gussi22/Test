const { Client, MessageEmbed, CommandInteraction } = require("discord.js");
const { connection } = require("mongoose");
require("../../../Events/Client/Ready");

module.exports = {
	name: "status",
	description: "Display status between client and database",
	/**
	 * 
	 * @param {CommandInteraction} interaction 
	 * @param {Client} client 
	 */
	async execute(interaction, client) {
		interaction.reply({ embeds: [
			new MessageEmbed()
				.setColor("BLUE")
				.setDescription(`**Client**: \`🟩 ONLINE\` - \`${
					client.ws.ping
				}ms\`\n **Uptime**: <t:${parseInt(client.readyTimestamp / 1000)}:R>\n
				**Database**: \`${switchTo(connection.readyState)}\``)
		]});
	}
};

function switchTo(val) {
	var status = "";
	switch (val) {
		case 0:
			status = "🟥 DISCONNECTED";
			break;
		case 1:
			status = "🟩 CONNECTED";
			break;
		case 2:
			status = "🟨 CONNECTING";
			break;
		case 3:
			status = "🟪 DISCONNECTING";
			break;
	}
	return status;
}