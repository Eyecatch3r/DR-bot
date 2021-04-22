const discordBot = require("./bot");
const Discord = require("discord.js");
const clientdc = new Discord.Client();
const env = require('custom-env').env();



console.log(process.env.DISCORD_TOKEN);
clientdc.login(process.env.DISCORD_TOKEN);