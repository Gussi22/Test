console.clear();

const { Client, Collection } = require("discord.js");
const client = new Client({ intents: 32767, partials: ["CHANNEL"] });
const { Token } = require("./config.json");

const { loadEvents } = require("../Structures/Handlers/Event");

client.events = new Collection();
client.commands = new Collection();
client.subCommands = new Collection();

loadEvents(client);

require("./Handlers/Anti-Crash")(client);

client.login(Token);
