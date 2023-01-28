async function loadModals(client) {
	const { loadFiles } = require("../../Functions/fileLoader");
	const ascii = require("ascii-table");
	const table = new ascii("Modals").setHeading("Name", "Status");

	await client.modals.clear();

	const Files = await loadFiles("Modals");

	Files.forEach((file) => {
		const modal = require(file);

		if (!modal.id)
			return table.addRow(file.split("/")[6], "🟥 Failed", "Missing ID");

		client.modals.set(modal.id, modal);
		table.addRow(modal.id, "🟩 Loaded");
	});

	return console.log(table.toString(), "\nModals Loaded")
}

module.exports = { loadModals };