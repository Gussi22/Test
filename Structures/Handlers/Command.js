const { Perms } = require("../Validation/Permissions");

async function loadCommands(client) {
  const { loadFiles } = require("../../Functions/fileLoader");
  const ascii = require("ascii-table");
  const table = new ascii("Commands").setHeading("Name", "Status");

  await client.commands.clear();
  await client.subCommands.clear();

  let CommandsArray = [];

  const Files = await loadFiles("Commands");

  Files.forEach((file) => {
    const command = require(file);

    if (command.subCommand)
      return client.subCommands.set(command.subCommand, command);

    if (!command.name)
      return table.addRow(file.split("/")[6], "🔴 Failed", "Missing name");

    if (!command.context && !command.description)
      return table.addRow(command.name, "🔴 Failed", "Missing description");

    if (command.permission) {
      if (Perms.includes(command.permission)) command.defaultPermission = false;
      else
        return table.addRow(command.name, "🔴 Failed", "Invalid permissions");
    }

    client.commands.set(command.name, command);

    CommandsArray.push(command);
    table.addRow(command.name, "🟩 Loaded");
  });

  client.application.commands.set(CommandsArray);

  return console.log(table.toString(), "\nCommands Loaded");
}

module.exports = { loadCommands };
