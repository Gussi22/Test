const { Perms } = require("../Validation/Permissions");
const { Client } = require("discord.js");

/**
 *
 * @param {Client} client
 */
module.exports = async (client, PG, Ascii) => {
  const Table = new Ascii("Commands Loaded");

  await client.commands.clear();

  let CommandsArray = [];

  (await PG(`${process.cwd().replace(/\\/g, "/")}/Commands/**/*.js`)).map(
    async (file) => {
      const command = require(file);

      if (!command.name)
        return Table.addRow(file.split("/")[6], "🔴 Failed", "Missing name");

      if (!command.context && !command.description)
        return Table.addRow(command.name, "🔴 Failed", "Missing description");

      if (command.permission) {
        if (Perms.includes(command.permission))
          command.defaultPermission = false;
        else
          return Table.addRow(command.name, "🔴 Failed", "Invalid permissions");
      }

      client.commands.set(command.name, command);
      CommandsArray.push(command);
      const L = file.split("/");
      await Table.setHeading("Name", "Status", "Directory").addRow(
        command.name,
        "🟢 Loaded",
        `${L[5] + "/" + L[6]}`
      );
    }
  );

  console.log(Table.toString());

  client.on("ready", async () => {
    client.application.commands.set(CommandsArray);
  });
};
