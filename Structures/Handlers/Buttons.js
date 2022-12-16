async function loadButtons(client) {
	const { loadFiles } = require("../../Functions/fileLoader");
	const ascii = require("ascii-table");
	const table = new ascii("Buttons").setHeading("Name", "Status");

	await client.buttons.clear();

	const Files = await loadFiles("Buttons");

	Files.forEach((file) => {
		const button = require(file);

		if (!button.id)
			return table.addRow(file.split("/")[6], "🟥 Failed", "Missing id");

		client.buttons.set(button.id, button);
		table.addRow(button.id, "🟩 Loaded");
	});

	return console.log(table.toString(), "\nButtons Loaded")
}

module.exports = { loadButtons };