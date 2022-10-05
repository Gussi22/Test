const { Events } = require("../Validation/EventNames");

module.exports = async (client, PG, Ascii) => {
  const Table = new Ascii("Events Loaded");

  (await PG(`${process.cwd().replace(/\\/g, "/")}/Events/**/*.js`)).map(
    async (file) => {
      const event = require(file);

      if (!Events.includes(event.name) || !event.name) {
        const L = file.split("/");
        await Table.addRow(
          `${event.name || "MISSING"}`,
          `🔴 Invalid or missing name: ${L[5] + `/` + L[6]}`
        );
        return;
      }
      if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client));
      } else {
        client.on(event.name, (...args) => event.execute(...args, client));
      }
      const L = file.split("/");
      await Table.setHeading("Name", "Status", "Directory").addRow(
        event.loadName ? event.loadName : event.name,
        "🟢 Loaded",
        `${L[5] + "/" + L[6]}`
      );
    }
  );
  console.log(Table.toString());
};
