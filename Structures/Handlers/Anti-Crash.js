const { MessageEmbed, WebhookClient, Client } = require("discord.js");
const { inspect } = require("util");
const s = new WebhookClient({
  url: "https://discord.com/api/webhooks/1027481078967054336/ZYewOg4WnkB6LGUx9kSuYz3BfYy8Iw95VivFIqhlae6XK7XYoMHOgAkc6KhlCPwP_I_j",
});

/**
 *
 * @param {Client} client
 */
module.exports = (client) => {
  client.on("error", (err) => {
    const ErrorEmbed = new MessageEmbed()
      .setTitle("Error")
      .setURL("https://discordjs.guide/popular-topics/errors.html#api-errors")
      .setColor("RED")
      .setDescription(inspect(err, { depth: 0 }))
      .setTimestamp();
    return s.send({
      embeds: [ErrorEmbed],
    });
  });

  process.on("unhandledRejection", (reason, p) => {
    const unhandledRejectionEmbed = new MessageEmbed()
      .setTitle("**🔴 Unhandled Rejection/Catch 🔴**")
      .setURL("https://nodejs.org/api/process.html#event-unhandledrejection")
      .setColor("RED")
      .addFields(
        {
          name: "Reason",
          value: inspect(reason, { depth: 0 }).substring(0, 1000),
        },
        { name: "Promise", value: inspect(p, { depth: 0 }).substring(0, 1000) }
      )
      .setTimestamp();
    return s.send({
      embeds: [unhandledRejectionEmbed],
    });
  });

  process.on("uncaughtException", (err, origin) => {
    const uncaughtExceptionEmbed = new MessageEmbed()
      .setTitle("**🔴 Uncaught Exception/Crash 🔴**")
      .setColor("RED")
      .setURL("https://nodejs.org/api/process.html#event-uncaughtexception")
      .addFields(
        { name: "Error", value: inspect(err, { depth: 0 }).substring(0, 1000) },
        {
          name: "Origin",
          value: inspect(origin, { depth: 0 }).substring(0, 1000),
        }
      )
      .setTimestamp();
    return s.send({
      embeds: [uncaughtExceptionEmbed],
    });
  });

  process.on("multipleResolves", (type, promise, reason) => {
    if (
      reason.toLocateString() ===
      "Error: Cannot perform IP discovery - socket closed"
    )
      return;
    const multipleResolvesEmbed = new MessageEmbed()
      .setTitle("**🔴 Multiple Resolves 🔴**")
      .setURL("https://nodejs.org/api/process.html#event-multipleresolves")
      .setColor("RED")
      .addFields(
        { name: "Type", value: inspect(type, { depth: 0 }).substring(0, 1000) },
        {
          name: "Promise",
          value: inspect(promise, { depth: 0 }).substring(0, 1000),
        },
        {
          name: "Reason",
          value: inspect(reason, { depth: 0 }).substring(0, 1000),
        }
      )
      .setTimestamp();
    return s.send({
      embeds: [multipleResolvesEmbed],
    });
  });

  process.on("warning", (warn) => {
    const warningEmbed = new MessageEmbed()
      .setTitle("**🔴 Warning 🔴**")
      .setColor("RED")
      .setURL("https://nodejs.org/api/process.html#event-warning")
      .addFields({
        name: "Warn",
        value: inspect(warn, { depth: 0 }).substring(0, 1000),
      })
      .setTimestamp();
    return s.send({
      embeds: [warningEmbed],
    });
  });
};
