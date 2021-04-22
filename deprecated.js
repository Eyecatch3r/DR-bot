if (message.content === command + "clearE") {
    let args = message.content.split(" ");
    db.run("UPDATE CandidateElections SET votes = 0 WHERE Election IN (SELECT eID FROM Elections WHERE Month = 'generalprobe')");
    db.run("DELETE FROM votercandidate WHERE candidate IN (SELECT candidate FROM candidateElections WHERE Election IN (SELECT eID FROM Elections WHERE Month = '"+args[1]+"'))");
  }

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
      case "pope":
        maxVote = 1;
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
        "https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png"
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

        //message.guild.members.cache.get(row.cID).toString()+"\n votes: "+row.votes

        message.channel.send(emb).then(m => {
          let filter = reaction => lett.includes(reaction.emoji.name);
          let tit = "";
          let val = "t:";
          for (i = 0; i < rows.length; i++) {

            emb.addField(
                "Candidate",
                lett[i]+":"+
                message.guild.members.cache.get(rows[i].DiscordID).toString() +
                "\n votes: " +
                rows[i].votes,
                true
            );
            let name = "";
            if(message.guild.members.cache.get(rows[i].DiscordID).nickname != null){
              name = message.guild.members.cache.get(rows[i].DiscordID).nickname}
            else{
              name = message.guild.members.cache.get(rows[i].DiscordID).user.username;
            }
            val += parseInt(rows[i].votes)+",";
            tit += i+"|";

            let pieChart = ImageCharts().cht('p3').chs('250x190') // 700px x 190px
                .chd(val) // 2 data points: 60 and 40
                .chl(tit).chtt("chart").toURL();
            emb.setImage(pieChart);

            m.edit(emb);
            m.react(lett[i]);
            can[i] = rows[i].DiscordID;
          }

          let collector = m.createReactionCollector(filter, { time: 86400000 });

          collector.on("collect", (reaction, user) => {
            if (!user.bot) {
              db.parallelize(() => {

                reaction.users.remove(user);
                //check the reaction, then find the user based by its ID in the database and update the vote count
                if (lett.includes(reaction.emoji.name)  && lett.indexOf(reaction.emoji.name) < rows.length) {
                  let order = lett.indexOf(reaction.emoji.name)+1;

                  db.get('SELECT * FROM Elections JOIN CandidateElections ON eID = Election JOIN Candidates ON candidate = cID WHERE Title = "' +args[1] +'" AND Month = "' +args[2] +'" AND number = '+order,[],(err,candidate) => {

                    if(args[1] == "tribune" && clientdc.guilds.cache.get('514135876909924352').members.cache.get(user.id).roles.cache.get('548455163044560897') || args[1] != "tribune" && clientdc.guilds.cache.get('514135876909924352').members.cache.get(user.id).roles.cache.get('548455163044560897') || clientdc.guilds.cache.get('514135876909924352').members.cache.get(user.id).roles.cache.get('548455006693752852') || args[1] == "pope" && clientdc.guilds.cache.get('514135876909924352').members.cache.get(user.id).roles.cache.get('564496146622316556')){
                      if (lett.indexOf(reaction.emoji.name) == candidate.number-1 && !user.bot) {

                        db.get("SELECT COUNT() AS c FROM Voters JOIN votercandidate ON vID = voter WHERE Voters.DiscordID = '"+user.id+"' AND votercandidate.Election = '"+candidate.eID+"' AND candidate = '"+candidate.cID+"'",[],(err,count) => {
                          db.get("SELECT * FROM Voters JOIN votercandidate ON vID = voter JOIN candidates ON cID = votercandidate.candidate JOIN CandidateElections ON cID = CandidateElections.candidate JOIN Elections ON CandidateElections.election = eID WHERE Voters.DiscordID = '"+user.id+"' AND CandidateElections.number = '"+candidate.number+"' AND Month = '"+args[2]+"' AND title = '"+args[1]+"'",[],(err,alreadyVoted) => {
                            if(count.c != 0){db.run("UPDATE CandidateElections SET votes = votes-1 WHERE number = '"+candidate.number +"' AND election IN (SELECT eID FROM Elections WHERE title = '"+args[1]+"' AND Month = '"+args[2]+"')");

                              //updates the embed with the new votes
                              let emb2 = new Discord.MessageEmbed();
                              emb2.setTitle(args[1] + " elections from: " + args[2]);
                              emb2.setColor("0x66023c");
                              emb2.setFooter("Elections powered by our most humble Imperator");
                              emb2.setThumbnail("https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png");
                              emb2.setAuthor("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒","https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");

                              db.all('SELECT * FROM Elections JOIN CandidateElections ON eID = Election JOIN Candidates ON candidate = cID WHERE Title = "' +args[1] +'" AND Month = "' +args[2] +'"',[],(err,results) => {
                                let tit = "";
                                let val = "t:";
                                for(var j = 0; j < results.length; j++){

                                  emb2.addField(
                                      "Candidate",
                                      lett[j]+": "+
                                      message.guild.members.cache.get(results[j].DiscordID).toString() +
                                      "\n votes: " +
                                      results[j].votes,
                                      true
                                  );
                                  let name = "";
                                  if(message.guild.members.cache.get(results[j].DiscordID).nickname != null){
                                    name = message.guild.members.cache.get(results[j].DiscordID).nickname}
                                  else{
                                    name = message.guild.members.cache.get(results[j].DiscordID).user.username;
                                  }

                                  val += parseInt(results[j].votes)+",";
                                  tit += j+"|";

                                }

                                let pieChart = ImageCharts().cht('p3').chs('250x190') // 700px x 190px
                                    .chd(val) // 2 data points: 60 and 40
                                    .chl(tit).chtt("Election results").toURL();
                                emb2.setImage(pieChart);

                                m.edit(emb2);
                              });


                              db.run("DELETE FROM votercandidate WHERE vcID = '"+alreadyVoted.vcID+"'")
                            }
                            else {
                              db.get("SELECT COUNT() AS count FROM Voters JOIN votercandidate ON vID = voter WHERE Voters.DiscordID = '"+user.id+"' AND votercandidate.Election = '"+candidate.eID+"'",[],(err,rowt) => {


                                if(rowt.count < maxVote || rowt.count == null){

                                  let cID;
                                  let vID;

                                  //updates the embed with the new votes
                                  let emb2 = new Discord.MessageEmbed();
                                  emb2.setTitle(args[1] + " elections from: " + args[2]);
                                  emb2.setColor("0x66023c");
                                  emb2.setFooter("Elections powered by our most humble Imperator");
                                  emb2.setThumbnail("https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png");
                                  emb2.setAuthor("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒","https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");

                                  db.run("UPDATE CandidateElections SET votes = votes+1 WHERE number = "+candidate.number +" AND Election IN (SELECT eID FROM Elections WHERE Month ='"+args[2]+"' AND title = '"+args[1]+"')").all('SELECT * FROM Elections JOIN CandidateElections ON eID = Election JOIN Candidates ON candidate = cID WHERE Title = "' +args[1] +'" AND Month = "' +args[2] +'"',[],(err,results) => {
                                    let tit = "";
                                    let val = "t:";
                                    for(var j = 0; j < results.length; j++){

                                      emb2.addField(
                                          "Candidate",
                                          lett[j]+": "+
                                          message.guild.members.cache.get(results[j].DiscordID).toString() +
                                          "\n votes: " +
                                          results[j].votes,
                                          true
                                      );
                                      let name = "";
                                      if(message.guild.members.cache.get(results[j].DiscordID).nickname != null){
                                        name = message.guild.members.cache.get(results[j].DiscordID).nickname}
                                      else{
                                        name = message.guild.members.cache.get(results[j].DiscordID).user.username;
                                      }

                                      val += parseInt(results[j].votes)+",";
                                      tit += j+"|";
                                    }

                                    let pieChart = ImageCharts().cht('p3').chs('250x190') // 700px x 190px
                                        .chd(val) // 2 data points: 60 and 40
                                        .chl(tit).chtt("Election results").toURL();
                                    emb2.setImage(pieChart);

                                    m.edit(emb2);
                                  });

                                  db.get("SELECT * FROM Voters WHERE DiscordID = '"+user.id+"'",[],(err,rows) =>{
                                    //if a voter is already registered insert the m-n relationship votercandidate

                                    if(rows == undefined){
                                      db.run("INSERT INTO Voters(DiscordID) VALUES("+user.id+")");
                                      db.get("SELECT * FROM CandidateElections WHERE number = '"+candidate.number +"'",[],(err,row) =>{
                                        cID = row.candidate;
                                        db.get("SELECT vID FROM VOTERS WHERE DiscordID = '"+user.id+"'",[],(err,r) => {
                                          vID = r.vID;
                                          db.run("INSERT INTO votercandidate(voter,candidate,Election) VALUES('"+vID+"','"+cID+"','"+candidate.eID+"')")});
                                      });
                                    }
                                    else db.get("SELECT * FROM CandidateElections WHERE number = '"+candidate.number+"'",[],(err,row) => {cID = row.candidate;
                                      db.get("SELECT vID FROM VOTERS WHERE DiscordID = '"+user.id+"'",[],(err,r) => {
                                        vID = r.vID;
                                        db.run("INSERT INTO votercandidate(voter,candidate,Election) VALUES('"+vID+"','"+cID+"','"+candidate.eID+"')")});
                                    });

                                  });


                                }
                                else { user.send("voted too many");

                                }



                              });
                            }
                          });
                        });
                      }
                    }
                  });






                }
              });
            }

          });

          collector.on("dispose",(reaction,user) =>{
            if(!user.bot){
              for (i = 0; i < rows.length; i++) {
                if (reaction.emoji.name == lett[i]) {
                  //db.run("UPDATE CandidateElection JOIN candidates ON candidate = cID SET votes = votes-1 WHERE DiscordID = '"+can[i]+"'");
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
          throw err;
        }
        else{
          message.channel.send(args[1] + " Elections react here with 🔴").then(m => {
            var order = 0;
            const filter = (reaction, user) => reaction.emoji.name === "🔴";
            m.react("🔴");
            const collector = m.createReactionCollector(filter, { max: 1000 });

            collector.on("collect", (reaction, user) => {
              if (!user.bot) {
                if(clientdc.guilds.cache.get('514135876909924352').members.cache.get(user.id).roles.cache.get('548455163044560897') && args[1] === "tribune" || args[1] != "tribune")
                {
                  order++;
                  message.guild.members.cache
                      .get(user.id)
                      .roles.add("703401102795604079");
                  //try to insert a new candidate, if already existant the exception will abort the process
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
                                db.get("SELECT eID FROM Elections WHERE Month = '"+args[2]+"' AND Title = '"+args[1]+"'",[],(err, row)=> {
                                  eID = row.eID;
                                  db.run('INSERT INTO CandidateElections(candidate,Election,number) VALUES("' +cID +'","' +eID +'",'+order+')')

                                });
                              }
                            });
                      });
                }else(user.send("sorry but only plebs can candidate"))
              }

            });
            collector.on("dispose",(reaction,user) => {
              order--;
              db.get(
                  "SELECT cID FROM candidates WHERE DiscordID = '" +
                  user.id +
                  "';",
                  [],
                  (err, rowss) => {
                    let eID,cID;
                    cID = rowss.cID;
                    db.get("SELECT eID FROM Elections WHERE Month = '"+args[2]+"' AND Title = '"+args[1]+"'",[],(err, row)=> {
                      eID = row.eID;
                      db.run("DELETE FROM candidateElections WHERE cnadidate = "+cID+"AND Election ="+eID);
                    });
                  });
            });

          });
        }
      });

    }

    else {
      message.channel.send("invalid role");
    }
  }


clientdc.interactions
      .createCommand({
        name: "number",
        description: "converts a Roman numeral into an Arabic one and vice-versa",
        options: [
          {
            name: "number",
            required: "true",
            description: "Number you want to convert",
            type: 3
          }
        ]
      },"514135876909924352")
      .then(console.log)
      .catch(console.error);
  console.log(interaction);