// server.js
// where your node app starts

// init project
const express = require("express");
const fs = require("fs");
const discordBotkit = require("botkit-discord");
var Client = require("uptime-robot");

const app = express();

const http = require("http");

//init sqlite API
const dbFile = "./DR.db";
const exists = fs.existsSync(dbFile);
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(dbFile);

const discordBot = require("./bot");
const Discord = require("discord.js");
const clientdc = new Discord.Client();
clientdc.login(process.env.DISCORD_TOKEN);
app.use(require("./guides"));

var MotionListChannel;

function updateEmbed() {
  var mainEmb = new Discord.MessageEmbed();

  mainEmb.setTitle("Motions");
  mainEmb.setColor("0xcc0000");
  mainEmb.setFooter(
    "Senate Meeting discussions powered by our most humble Imperator"
  );
  mainEmb.setThumbnail(
    "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimage0.png?v=1588186014686"
  );
  mainEmb.setAuthor(
    "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
    "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473"
  );
  mainEmb.setDescription("Motions to discuss in Senate meetings");

  let msgs = new Array();
  let sql2 = `SELECT * FROM Motions;`;
  db.all(sql2, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach(row => {
      //message.channel.send(row.motion);
      if (clientdc.users.cache.get(row.creator) != undefined) {
        let msg =
          row.motion +
          "\n" +
          "From:" +
          clientdc.users.cache.get(row.creator).toString() +
          "\n" +
          "motion ID:" +
          row.mID +
          "\n" +
          "--------------------" +
          "\n";
        msgs.push(msg);
      }
    });

    if (msgs.length <= 25) {
      msgs.forEach(msg => mainEmb.addField(msg));
    } else {
      var args2 = new Array();
      for (var i = 0; i < msgs.length / 2; i++) {
        args2.push(msgs[i]);
        msgs.pop();
      }
      msgs.forEach(msg => mainEmb.addField(msg));

      var secEmb = new Discord.MessageEmbed();

      secEmb.setTitle("Motions");
      secEmb.setColor("0xcc0000");
      secEmb.setFooter(
        "Senate Meeting discussions powered by our most humble Imperator"
      );
      secEmb.setThumbnail(
        "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimage0.png?v=1588186014686"
      );
      secEmb.setAuthor(
        "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
        "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473"
      );
      secEmb.setDescription("Motions to discuss in Senate meetings");

      args2.forEach(msg => secEmb.addField(msg));
    }
    //clientdc.channels.cache.get("705136080105767004").send(test);
  });
}

function updateEmbedMessage(message) {
  let embed = new Discord.MessageEmbed();

  embed.setTitle("Motions");
  embed.setColor("0xcc0000");
  embed.setFooter(
    "Senate Meeting discussions powered by our most humble Imperator"
  );
  embed.setThumbnail(
    "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimage0.png?v=1588186014686"
  );
  embed.setAuthor(
    "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
    "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473"
  );

  let msgs = new Array();
  let sql2 = `SELECT * FROM Motions;`;
  db.all(sql2, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach(row => {
      //message.channel.send(row.motion);
      if (message.guild.members.cache.get(row.creator) != undefined) {
        let msg =
          row.motion +
          "\n" +
          "From:" +
          message.guild.members.cache.get(row.creator).toString() +
          "\n" +
          "motion ID:" +
          row.mID +
          "\n\n";
        msgs.push(msg);
      } else {
        message.channel.send("im sorry but this is the wrong Server");
      }

      //message.channel.send(row.mID);
    });
    if (msgs.length <= 25) {
      msgs.forEach(msg => embed.addField("motions", msg));
      message.guild.channels.cache
        .get("705136080105767004")
        .messages.fetch({ around: "705898782935613501", limit: 1 })
        .then(messages => messages.first().edit(embed));
    } else {
      if (msgs.length <= 25) {
        msgs.forEach(msg => embed.addField("motion", msg, false));
        message.channel.send(embed);
      } else {
        var args2 = new Array();
        for (var i = msgs.length; i > msgs.length / 2; i--) {
          args2.push(msgs[i]);
          msgs.pop();
        }

        var secEmb = new Discord.MessageEmbed();

        secEmb.setTitle("Motions");
        secEmb.setColor("0xcc0000");
        secEmb.setFooter(
          "Senate Meeting discussions powered by our most humble Imperator"
        );
        secEmb.setThumbnail(
          "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimage0.png?v=1588186014686"
        );
        secEmb.setAuthor(
          "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
          "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473"
        );
        secEmb.setDescription("Motions to discuss in Senate meetings");

        args2.forEach(msg => secEmb.addField("motion", msg, false));
        msgs.forEach(msg => embed.addField("motion", msg, false));
        message.guild.channels.cache
          .get("705136080105767004")
          .messages.fetch({ around: "705898782935613501", limit: 1 })
          .then(messages => messages.first().edit(embed));
        message.guild.channels.cache
          .get("705136080105767004")
          .messages.fetch({ around: "705898783757565995", limit: 1 })
          .then(messages => messages.first().edit(secEmb));
      }
    }
  });
}

clientdc.on("ready", () => {
  //db.run("DELETE FROM candidates");
  //db.run("DELETE FROM Elections");
  //db.run("DELETE FROM CandidateElections");

  updateEmbed();

  db.all("SELECT * FROM candidates", [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach(row => {
      console.log("cID \n" + row.cID);
      console.log("DiscordID \n" + row.DiscordID);
    });
  });

  db.all("SELECT * FROM CandidateElections", [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach(row => {
      console.log("ceID \n" + row.ceID);
      console.log("candidate \n" + row.candidate);
      console.log("Election \n" + row.Election);
    });
  });

  db.all("SELECT * FROM Elections", [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach(row => {
      console.log("eID \n" + row.eID);
      console.log("Title \n" + row.Title);
      console.log("Month \n" + row.Month);
    });
  });
});

//simple test query
let sql = `SELECT * FROM Birthdates;`;

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach(row => {
    console.log(row.Birthdate);
    console.log(row.celebrated);
    console.log(row.DiscordID);
  });
});

//compare dates with the current date
const dateformat = require("dateformat");
var date = new Date();
console.log(dateformat("isoDate"));
var dates = dateformat("isoDate").split("-");
var time = dateformat(date, "longTime", true).split(":");
if (dates[1].startsWith("0")) {
  dates[1] = dates[1].substring(1);
}
console.log(dates[1] + dates[2]);
console.log(dateformat(date, "longTime", true));
console.log(time[0] + time[1]);

async function updateDate() {
  if (dateformat() != date) {
    date = new Date();
    console.log(dateformat("isoDate"));
    dates = dateformat("isoDate").split("-");
    time = dateformat(date, "longTime", true).split(":");
    if (dates[1].startsWith("0")) {
      dates[1] = dates[1].substring(1);
    }
    console.log(dates[1] + dates[2]);
    console.log(dateformat(date, "longTime", true));
    console.log(time[0] + time[1]);
  }
}

let query =
  `SELECT * FROM Birthdates WHERE Birthdate LIKE ` +
  "'%" +
  dates[1] +
  dates[2] +
  "'";

clientdc.on("presenceUpdate", (oldPresence, newPresence) => {
  //clientdc.channels.cache.get("514135876909924354").send("test");

  db.all(query, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach(row => {
      updateDate();
      if (newPresence.userID == row.DiscordID && row.celebrated == 0) {
        db.run("UPDATE Birthdates SET celebrated = 1 WHERE bID = " + row.bID);
        clientdc.channels.cache
          .get("514135876909924354")
          .send(
            "happy Birthday " +
              newPresence.user.toString() +
              " :partying_face: :confetti_ball: :tada: "
          );
        //clientdc.channels.cache.get("514135876909924354").send("test");
      }
      //console.log(row.DiscordID);
    });
  });
});
function getUser(mention) {
  if (!mention) return;

  if (mention.startsWith("<@") && mention.endsWith(">")) {
    mention = mention.slice(2, -1);

    if (mention.startsWith("!")) {
      mention = mention.slice(1);
    }

    return clientdc.users.cache.get(mention);
  }
}

function getRole(mention, server) {
  if (!mention) return;

  if (mention.startsWith("<@") && mention.endsWith(">")) {
    mention = mention.slice(2, -1);

    if (mention.startsWith("&")) {
      mention = mention.slice(1);
    }

    return clientdc.guilds.cache.get(server).roles.cache.get(mention);
  }
}

/**function setRoleCollector(message,reactionEmoji)
{
  const filter = reaction => reaction.emoji.name === '🔴'; 
              m.react("🔴");
    const collector = message.createReactionCollector(filter, { max: 1000 });

    collector.on('collect', (reaction,user) => {
      if(!user.bot){
      message.guild.members.cache.get(user.id).roles.add('703401102795604079');
      }
    }
        
      
}**/

var command = process.env.Prefix;
clientdc.on("message", message => {
  if (message.content === command + "clearDB") {
    if(message.author.id === '325296044739133450'){
    db.run("DELETE FROM candidates");
    db.run("DELETE FROM Elections");
    db.run("DELETE FROM CandidateElections");
    db.run("DELETE FROM Voters");
    db.run("DELETE FROM votercandidate");
    message.channel.send("all right");
  }
  else {message.channel.send("sorry but you're not the Imperator "+"<@325296044739133450>")}
  }
  
  if(message.content.toLowerCase().includes(" cor ") || message.content.toLowerCase().includes(" cock ") || message.content.toLowerCase().includes("byq") || message.content.toLowerCase().includes("byqerino") || message.content.toLowerCase().includes("corey") || message.content.toLowerCase().includes("naresh"))
    {
      if(!message.author.bot){
     message.channel.send("https://cdn.discordapp.com/attachments/514135876909924354/708105678253981766/DeepFryer_20200507_193318.jpg");
      }
    }
  
  if (message.content === command + "showDB") {
    if(message.author.id === '325296044739133450'){
    
    db.all("SELECT * FROM candidates", [], (err, rows) => {
      if (err) {
        throw err;
      }
      rows.forEach(row => {
        console.log("cID \n" + row.cID);
        console.log("DiscordID \n" + row.DiscordID);
      });
    });

    db.all("SELECT * FROM CandidateElections", [], (err, rows) => {
      if (err) {
        throw err;
      }
      rows.forEach(row => {
        console.log("ceID \n" + row.ceID);
        console.log("candidate \n" + row.candidate);
        console.log("Election \n" + row.Election);
        console.log("votes \n"+row.votes);
      });
    });

    db.all("SELECT * FROM Elections", [], (err, rows) => {
      if (err) {
        throw err;
      }
      rows.forEach(row => {
        console.log("eID \n" + row.eID);
        console.log("Title \n" + row.Title);
        console.log("Month \n" + row.Month);
      });
    });
      
      db.all("SELECT * FROM Voters", [], (err, rows) => {
      if (err) {
        throw err;
      }
      rows.forEach(row => {
        console.log("vID \n" + row.vID);
        console.log("discordID \n" + row.DiscordID);
        
      });
    });
      
      db.all("SELECT * FROM votercandidate", [], (err, rows) => {
      if (err) {
        throw err;
      }
      rows.forEach(row => {
        console.log("vcID \n" + row.vcID);
        console.log("candidate \n" + row.candidate);
        console.log("voter \n" + row.voter);
      });
    });
      
      
  
  }
    else {message.channel.send("sorry but you're not the Imperator "+"<@325296044739133450>")}
  }
  if (message.content.toLowerCase().includes(command + "election")) {
    let args = message.content.split(" ");
    let maxVote;
    switch(args[1])
      {
        case "consul":
          maxVote = 2;
          break;
        case "praetor":
          maxVote = 3;
          break;
        case "aedile":
          maxVote = 2;
          break;
        case "quaestor":
          maxVote = 4;
          break;
        case "tribune":
          maxVote = 2;
          break;
          
      }
    
    let emb = new Discord.MessageEmbed();
    var lett = [
      "0️⃣",
      "1️⃣",
      "2️⃣",
      "3️⃣",
      "4️⃣",
      "5️⃣",
      "6️⃣",
      "7️⃣",
      "8️⃣",
      "9️⃣",
      "🔟",
      "🔢",
      "#️⃣",
      "*️⃣",
      "⏏️",
      "▶️",
      "⏸",
      "⏯",
      "⏹",
      "⏺",
      "⏭",
      "⏮",
      "⏩",
      "⏪",
      "⏫",
      "⏬"
    ];

    emb.setTitle(args[1] + " elections from: " + args[2]);
    emb.setColor("0x66023c");
    emb.setFooter("Elections powered by our most humble Imperator");
    emb.setThumbnail(
      "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimage0.png?v=1588186014686"
    );
    emb.setAuthor(
      "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
      "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473"
    );

    let sql4 =
      'SELECT * FROM Elections JOIN CandidateElections ON eID = Election JOIN Candidates ON candidate = cID WHERE Title = "' +
      args[1] +
      '" AND Month = "' +
      args[2] +
      '"';

    let can = new Array();
    db.parallelize(() => {
    db.all(sql4, [], (err, rows) => {
      if (err) {
        throw err;
        message.channel.send("sth went wrong");
      }
      message.channel.send(rows.length);
      //message.guild.members.cache.get(row.cID).toString()+"\n votes: "+row.votes
      
      message.channel.send(emb).then(m => {
        let filter = reaction => lett.includes(reaction.emoji.name);
for (i = 0; i < rows.length; i++) {
        rows.forEach(row => {
          emb.addField(
            "Candidate",
            lett[i] +
              message.guild.members.cache.get(row.DiscordID).toString() +
              "\n votes: " +
              row.votes,
            true
          );
          
        });
        
          m.edit(emb);
          m.react(lett[i]);
          can[i] = rows[i].DiscordID;
        }

        let collector = m.createReactionCollector(filter, { time: 86400000 });

        collector.on("collect", (reaction, user) => {
          if (!user.bot) {
            
            for (i = 0; i < rows.length; i++) {
              reaction.remove();
              //check the reaction, then find the user based by its ID in the database and update the vote count
              if (reaction.emoji.name == lett[i]) {
                rows.forEach(candidate => {
                  if (can[i] == candidate.DiscordID && !user.bot) {
                    db.get("SELECT COUNT() AS c FROM Voters JOIN votercandidate ON vID = voter JOIN candidates ON cID = votercandidate.candidate JOIN CandidateElections ON cID = CandidateElections.candidate JOIN Elections ON election = eID WHERE Voters.DiscordID = '"+user.id+"' AND candidates.DiscordID = '"+candidate.DiscordID+"' AND Month = '"+args[2]+"' AND title = '"+args[1]+"'",[],(err,count) => {
                    db.get("SELECT * FROM Voters JOIN votercandidate ON vID = voter JOIN candidates ON cID = votercandidate.candidate JOIN CandidateElections ON cID = CandidateElections.candidate JOIN Elections ON election = eID WHERE Voters.DiscordID = '"+user.id+"' AND candidates.DiscordID = '"+candidate.DiscordID+"' AND Month = '"+args[2]+"' AND title = '"+args[1]+"'",[],(err,alreadyVoted) => {
                      if(count.c != 0){db.run("UPDATE CandidateElections SET votes = votes-1 WHERE candidate IN (SELECT cID From candidates WHERE DiscordID = '"+candidate.DiscordID+"') AND election IN (SELECT eID FROM Elections WHERE title = '"+args[1]+"' AND Month = '"+args[2]+"')");
                                                   db.run("DELETE FROM votercandidate WHERE vcID = '"+alreadyVoted.vcID+"'")
                                                   }
                      else {
                    db.get("SELECT COUNT() AS count FROM Voters JOIN votercandidate ON vID = voter JOIN CandidateElections ON votercandidate.candidate = candidateElections.candidate JOIN Elections ON Election = eID WHERE voter IN (SELECT vID FROM Voters WHERE DiscordID = '"+user.id+"') AND Election IN (SELECT eID WHERE Month = '"+args[2]+"' AND title = '"+args[1]+"')",[],(err,rowt) => {
                      if(rowt.count <= maxVote || rowt.count == undefined){
                   message.channel.send(rowt.count);
                        
                      db.run("UPDATE CandidateElections SET votes = votes+1 WHERE candidate IN (SELECT cID FROM candidates WHERE DiscordID = "+candidate.DiscordID+")  AND Election IN (SELECT eID FROM Elections WHERE Month ='"+args[2]+"' AND title = '"+args[1]+"')");
                    let cID;
                    let vID;
                    db.get("SELECT * FROM Voters WHERE DiscordID = '"+user.id+"'",[],(err,rows) =>{
                      //if a voter is already registered insert the m-n relationship votercandidate
                    m.channel.send(user.id);
                      if(rows == undefined){
                        db.run("INSERT INTO Voters(DiscordID) VALUES("+user.id+")");
                        db.get("SELECT cID FROM candidates WHERE DiscordID = '"+candidate.DiscordID+"'",[],(err,row) =>{ 
                          cID = row.cID; 
                          db.get("SELECT vID FROM VOTERS WHERE DiscordID = '"+user.id+"'",[],(err,r) => {
                            vID = r.vID;
                          db.run("INSERT INTO votercandidate(voter,candidate) VALUES('"+vID+"','"+cID+"')")});
                        });
                      }
                      else db.get("SELECT cID FROM candidates WHERE DiscordID = '"+candidate.DiscordID+"'",[],(err,row) => {cID = row.cID; 
                          db.get("SELECT vID FROM VOTERS WHERE DiscordID = '"+user.id+"'",[],(err,r) => {
                            vID = r.vID;
                          db.run("INSERT INTO votercandidate(voter,candidate) VALUES('"+vID+"','"+cID+"')")});
                          });
                      
                                                                                                              }); 
                    
                    
                      }
                      else { message.channel.send("voted too many");
                        
                      }
                   }); 
                    }  
                  });
                    });
                  }
                });
             
              //updates the embed with the new votes 
              let emb2 = new Discord.MessageEmbed();
              emb2.setTitle(args[1] + " elections from: " + args[2]);
    emb2.setColor("0x66023c");
    emb2.setFooter("Elections powered by our most humble Imperator");
    emb2.setThumbnail("https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimage0.png?v=1588186014686");
    emb2.setAuthor("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒","https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");

              db.all('SELECT * FROM Elections JOIN CandidateElections ON eID = Election JOIN Candidates ON candidate = cID WHERE Title = "' +args[1] +'" AND Month = "' +args[2] +'"',[],(err,results) => {
              results.forEach(result =>{
                emb2.addField(
                  "Candidate",
                  lett[i-1] +
                    message.guild.members.cache.get(result.DiscordID).toString() +
                    "\n votes: " +
                    result.votes,
                  true
                );
                });
               m.react(lett[i-1]);
                m.edit(emb2);
              });
              
            

            
          }
          }
          }
        });
        
        collector.on("dispose",(reaction,user) =>{
          if(!user.bot){
             for (i = 0; i < rows.length; i++) {
            if (reaction.emoji.name == lett[i]) {
            db.run("UPDATE CandidateElection JOIN candidates ON candidate = cID SET votes = votes-1 WHERE DiscordID = '"+can[i]+"'");
            }
             }
          }
        });
      });
    });
      });
  }
  if (message.content.toLowerCase().includes(command + "prepare")) {
    let args = message.content.split(" ");
    if (
      args[1] == "consul" ||
      "praetor" ||
      "aedile" ||
      "quaestor" ||
      "tribune"
    ) {
      db.run("INSERT INTO Elections(Title,Month) VALUES('"+args[1]+"','"+args[2]+"')");
    }else message.channel.send("not a real role");
  }
  if (message.content.toLowerCase().includes(command + "candidate")) {
    let args = message.content.split(" ");
    if (
      args[1] == "consul" ||
      "praetor" ||
      "aedile" ||
      "quaestor" ||
      "tribune"
    ) {
      let query =
        'INSERT INTO Elections(Title,Month) VALUES("' +
        args[1] +
        '","' +
        args[2] +
        '");';
      db.all(query, [], err => {
        if (err) {
          message.channel.send("month already specified");
        }
      else{
      clientdc.channels.cache
        .get("548918811391295489")
        .send(args[1] + " Elections react here with 🔴")
        .then(m => {
          const filter = (reaction, user) => reaction.emoji.name === "🔴";
          m.react("🔴");
          const collector = m.createReactionCollector(filter, { max: 1000 });

          collector.on("collect", (reaction, user) => {
            if (!user.bot) {
              
              message.guild.members.cache
                .get(user.id)
                .roles.add("703401102795604079");
              db.all(
                'INSERT INTO candidates(DiscordID) VALUES("' + user.id + '")',
                [],
                err => {
                  if (err) {
                  }
                
              db.get(
                "SELECT cID FROM candidates WHERE DiscordID = '" +
                  user.id +
                  "';",
                [],
                (err, rowss) => {
                  if (err) {
                    m.channel.send(
                      "sorry but there was an error (probably wrong ID)"
                    );
                  } else {
                    let eID,cID;
                    cID = rowss.cID;
                    db.get("SELECT eID FROM Elections WHERE Month = '"+args[2]+"'",[],(err, row)=> {
                    eID = row.eID;
                      db.run(
                        'INSERT INTO CandidateElections(candidate,Election) VALUES("' +
                          cID +
                          '","' +
                          eID +
                          '")'
                      )
                    
                    });
                  }
                });
                  });
            }
                
          });
        
        });
      }
        });
      
    } 
             
             else {
      message.channel.send("invalid role");
    }
  }

  // If the message is "ping"
  if (message.content === "ping") {
    // Send "pong" to the same channel
    message.channel.send("Pong I guess");
    message.channel.send(message.author.toString());
  }
  if (message.content.toLowerCase() === command + "imperialtree") {
    message.channel.send(
      "https://cdn.discordapp.com/attachments/630588104184430643/705349480559411261/unknown.png"
    );
  }

  if (message.content.toLowerCase().includes(command + "smotion")) {
    let embed = new Discord.MessageEmbed();
    var args = message.content.split(" ");
    embed.setTitle("Motion ID:" + args[1]);
    embed.setColor("0xcc0000");
    embed.setFooter(
      "Senate Meeting discussions powered by our most humble Imperator"
    );

    let available = false;
    let sql2 = `SELECT * FROM Motions WHERE mID = ` + args[1];
    db.all(sql2, [], (err, rows) => {
      if (err) {
        throw err;
      }
      rows.forEach(row => {
        available = true;
        embed.addField(
          "Motion in question",
          row.motion +
            "\n From:" +
            message.guild.members.cache.get(row.creator).toString(),
          true
        );
        console.log(row.motion);
        embed.setAuthor(
          "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
          clientdc.users.cache.get(row.creator).avatarURL()
        );
      });
      if (!available) {
        embed.addField("Motion in question", "no motion with such ID", false);
      }
      message.channel.send(embed);
    });
  }

  if (message.content.toLowerCase() == command + "motions") {
    if (
      message.member.roles.cache.has("543783180130320385") ||
      message.member.roles.cache.has("550392133991923738")
    ) {
      let embed = new Discord.MessageEmbed();

      embed.setTitle("Motions");
      embed.setColor("0xcc0000");
      embed.setFooter(
        "Senate Meeting discussions powered by our most humble Imperator"
      );
      embed.setThumbnail(
        "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimage0.png?v=1588186014686"
      );
      embed.setAuthor(
        "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
        "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473"
      );
      let msgs = new Array();
      let sql2 = `SELECT * FROM Motions;`;
      db.all(sql2, [], (err, rows) => {
        if (err) {
          throw err;
        }
        rows.forEach(row => {
          //message.channel.send(row.motion);
          if (message.guild.members.cache.get(row.creator) != undefined) {
            let msg =
              row.motion +
              "\n" +
              "From:" +
              message.guild.members.cache.get(row.creator).toString() +
              "\n" +
              "motion ID:" +
              row.mID +
              "\n\n";
            msgs.push(msg);
          } else {
            message.channel.send("im sorry but this is the wrong Server");
          }
        });

        var secEmb = new Discord.MessageEmbed();

        secEmb.setTitle("Motions second page");
        secEmb.setColor("0xcc0000");
        secEmb.setFooter(
          "Senate Meeting discussions powered by our most humble Imperator"
        );
        secEmb.setThumbnail(
          "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimage0.png?v=1588186014686"
        );
        secEmb.setAuthor(
          "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
          "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473"
        );
        secEmb.setDescription("Motions to discuss in Senate meetings");

        if (msgs.length <= 25) {
          msgs.forEach(msg => embed.addField("motion", msg, false));
          message.channel.send(embed);
          message.channel.send(secEmb);
        } else {
          var args2 = new Array();
          for (var i = msgs.length; i > msgs.length / 2; i--) {
            args2.push(msgs[i]);
            msgs.pop();
          }

          args2.forEach(msg => secEmb.addField("motion", msg, false));
          msgs.forEach(msg => embed.addField("motion", msg, false));
          message.channel.send(embed);
          message.channel.send(secEmb);
        }
      });
    } else message.channel.send("not a Senator/Tribune broski");
  }

  if (message.content.toLowerCase().includes(command + "motion ")) {
    if (
      message.member.roles.cache.has("543783180130320385") ||
      message.member.roles.cache.has("550392133991923738")
    ) {
      var args = message.content.split(" ");
      console.log(
        "INSERT INTO Motions(motion,creator) VALUES(" +
          "'" +
          args[1] +
          "'" +
          "," +
          message.member.id +
          ");"
      );
      let inp = "";
      for (i = 1; i < args.length; i++) {
        inp += args[i] + " ";
      }
      db.all(
        "INSERT INTO Motions(motion,creator) VALUES(" +
          "'" +
          inp +
          "'" +
          "," +
          "'" +
          message.member.id +
          "'" +
          ");",
        [],
        (err, rows) => {
          if (err) {
            message.channel.send("sth went wrong");
            console.log(err);
          } else {
            message.channel.send("duly noted");
            updateEmbedMessage(message);
          }
        }
      );
    } else {
      message.channel.send(
        "you do not have any authority to propose motions, please turn to your corresponding Senator or Tribune (if you're a filthy Pleb)"
      );
    }
  }

  if (message.content.includes(command + "deletemotion")) {
    if (
      message.member.roles.cache.has("649362430446796815") ||
      message.member.roles.cache.has("565594839828398100") ||
      message.member.roles.cache.has("514143501697679361") ||
      message.member.roles.cache.has("546654987061821440")
    ) {
      var args = message.content.split(" ");
      db.all("DELETE FROM Motions WHERE mID =" + args[1], [], (err, rows) => {
        if (err) {
          message.channel.send("wrong ID");
        }
        message.channel.send("motion deleted");

        updateEmbedMessage(message);
      });
    } else {
      message.channel.send("you do not have the permission to delete a motion");
    }
  }

  if (message.content.toLowerCase().includes(command + "deleteallmotions")) {
    if (
      message.member.roles.cache.has("649362430446796815") ||
      message.member.roles.cache.has("565594839828398100") ||
      message.member.roles.cache.has("514143501697679361") ||
      message.member.roles.cache.has("546654987061821440")
    ) {
      db.all("DELETE FROM Motions", [], (err, rows) => {
        if (err) {
          message.channel.send("sth went wrong");
        } else message.channel.send("motions deleted");
        updateEmbedMessage(message);
      });
    } else {
      message.channel.send("you do not have the permission to delete a motion");
    }
  }

  if (message.content.toLowerCase().includes(command + "adddate")) {
    let args = message.content.split(" ");

    console.log(args[1]);
    if (args[1].length === 4) {
      let bdate = args[1].toString();
      if (args[2] != null) {
        var id = message.mentions.users.first().id;

        let add =
          "INSERT INTO Birthdates(Birthdate,DiscordID,celebrated) VALUES(" +
          bdate +
          ",'" +
          id +
          "',0)";
        db.run(add);
      }
      var userID = message.author.id;
      console.log(userID);

      let add =
        "INSERT INTO Birthdates(Birthdate,DiscordID,celebrated) VALUES(" +
        bdate +
        "," +
        userID +
        ",0)";

      db.run(add);

      message.channel.send("Date added succesfully");
    }
  }
  if (message.content.toLowerCase().includes(command + "deletedate")) {
    var id = message.mentions.users.first().id;
    let add = "DELETE FROM Birthdates WHERE DiscordID =" + id + ";";
    if (id != null) {
      db.run(add);
      message.channel.send("Date removed succesfully");
    }
  }
  if (message.content.toLowerCase().includes(command + "addroles")) {
    let args = message.content.split(" ");
    let role = getRole(args[1], message.guild.id);
    let ment = new Array();
    if (role) {
      console.log(args[1]);
      for (var i = 2; i < args.length; i++) {
        ment[i - 2] = args[i];
      }

      ment.forEach(element => {
        message.guild.members.resolve(getUser(element)).roles.add(role);
      });
      message.channel.send("done");
    } else {
      message.channel.send("thats not a Role Broski");
    }
  }
  if (message.content.toLowerCase() === "?pray") {
    message.author.send("dont listen to Dyno Byzantium is Roman");
  }
});

clientdc.on("message", async message => {
  if (!message.author.bot && message.author.id != "241349696856129539") {
    if (message.content.toLowerCase().includes("istanbul")) {
      message.channel.send("its Constantinople smh");
    }

    if (message.channel.type === "dm") {
      var args = message.content.split("-");
      clientdc.channels.cache.get(args[0]).send(args[1]);
    }

    if (
      message.content.toLowerCase().includes("the general") ||
      message.content.toLowerCase().includes("general")
    ) {
      message.channel.send("hail Apicius");
      message.react("640270832115122196");
    }

    if (
      message.content.toLowerCase().includes("hre ") ||
      message.content.toLowerCase().includes("holy Roman Empire") ||
      message.content.toLowerCase().includes("hre ")
    ) {
      message.channel.send("shame on you");
    }

    if (
      message.content.toLowerCase().includes("Civil war") ||
      message.content.toLowerCase().includes("civil war")
    ) {
      message.channel.send("yall know who won right :wink:");
    }

    if (
      message.content.toLowerCase().includes("imperator") ||
      message.content.toLowerCase().includes("emperor")
    ) {
      var num = Math.random();
      console.log(num);
      if (num <= 0.8) {
        message.channel.send(
          "All hail the Imperator https://media.4teachers.de/images/thumbs/image_thumb.1146.jpg"
        );
      } else
        message.channel.send(
          "All hail the Imperator https://cdn.discordapp.com/attachments/543787157127561216/706809950327799848/waaw.png"
        );
      message.react("664229248944439301");
    }
    if (
      message.content.toLowerCase().includes("imperatrix") ||
      message.content.toLowerCase().includes("empress")
    ) {
      message.channel.send(
        "All hail the Empress https://pbs.twimg.com/profile_images/837236794387234816/megbmYw2_400x400.jpg"
      );
      message.react("636456201273475113");
    }
  }
});

clientdc.on("messageUpdate", message => {
  if (!message.author.bot) {
    //message.channel.send("I saw that edit");
  }
});

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));
// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);

  setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
  }, 280000);
});
