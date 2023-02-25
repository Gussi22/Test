console.clear();

const { Client, Collection } = require("discord.js");
const client = new Client({ intents: 32767, partials: ["CHANNEL"] });
const { Token } = require("./config.json");

const { loadEvents } = require("../Structures/Handlers/Event");
const { loadButtons } = require("../Structures/Handlers/Buttons");
const { loadMenus } = require("../Structures/Handlers/Menus");
const { loadModals } = require("./Handlers/Modals");

client.events = new Collection();
client.commands = new Collection();
client.subCommands = new Collection();
client.buttons = new Collection();
client.menus = new Collection();
client.modals = new Collection();

loadEvents(client);
loadButtons(client);
loadMenus(client)
loadModals(client);

require("./Handlers/Anti-Crash")(client);

client.login(Token);
