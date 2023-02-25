async function loadMenus(client) {
	const { loadFiles } = require("../../Functions/fileLoader");
	const ascii = require("ascii-table");
	const table = new ascii("Menus").setHeading("Name", "Status");

	await client.menus.clear();

	const Files = await loadFiles("Menus");

	Files.forEach((file) => {
		const menu = require(file);

		if (!menu.id)
			return table.addRow(file.split("/")[6], "🟥 Failed", "Missing id");

		client.menus.set(menu.id, menu);
		table.addRow(menu.id, "🟩 Loaded");
	});

	return console.log(table.toString(), "\nMenus Loaded")
}

module.exports = { loadMenus };