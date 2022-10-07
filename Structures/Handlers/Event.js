const { Events } = require("../Validation/EventNames");

async function loadEvents(client) {
  const { loadFiles } = require("../../Functions/fileLoader");
  const ascii = require("ascii-table");
  const table = new ascii("Events").setHeading("Name", "Status");

  await client.events.clear();

  const Files = await loadFiles("Events");

  Files.forEach((file) => {
    const event = require(file);

    if (!Events.includes(event.name) || !event.name) {
      const L = file.split("/");
      return table.addRow(
        `${event.name || "MISSING"}`,
        `🔴 Invalid/Missing name: ${L[5] + `/` + L[6]}`
      );
    }
    if (event.once) {
      client.once(event.name, (...args) => event.execute(...args, client));
    } else {
      client.on(event.name, (...args) => event.execute(...args, client));
    }

    table.addRow(event.name, "🟩");
  });

  return console.log(table.toString(), "\nLoaded events");
}

module.exports = { loadEvents };
