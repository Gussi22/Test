const { Client, Collection } = require("discord.js");
const client = new Client({ intents: 32767, partials: ["CHANNEL"] });
const { Token } = require("./config.json");

const { promisify } = require("util");
const { glob } = require("glob");
const PG = promisify(glob);
const Ascii = require("ascii-table");

["Events"].forEach((handler) => {
  require(`./Handlers/${handler}`)(client, PG, Ascii);
});

client.login(Token);
