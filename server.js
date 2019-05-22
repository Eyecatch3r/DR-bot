// server.js
// where your node app starts

// init project
const express = require("express");
const fs = require("fs");
const discordBotkit = require("botkit-discord");

var Client = require("uptime-robot");

const app = express();
const discordBot = require("./bot");

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));
app.get("/guide", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/install", function(request, response) {
  response.sendFile(__dirname + "/views/install.html");
});

app.get("/domainname", function(request, response) {
  let domain = process.env.PROJECT_DOMAIN;
  response.status(200).json({
    message: domain
  });
});

app.get("/botinfo", async function(request, response) {
  let authURL = discordBot.config.client.inviteURL;
  let domain = process.env.PROJECT_DOMAIN;
  let uptime = process.uptime();
  let uptimeRobotApiKey = false;
  let uptimeRobotMonitor = false;
  
   try {
    let num = await promise13();
    console.log('num', num);
  } catch(e) {
    console.log('Error caught');
  }
      const uptimeRobot =   await new Client(process.env.UPTIME_ROBOT_KEY);
      
  let monitors = await uptimeRobot.getMonitors();

    monitors.forEach(function(monitor) {
        if (
          monitor.url ==
          "https://" + process.env.PROJECT_DOMAIN + ".glitch.me"
        ) {
          uptimeRobotMonitor = true;
        }
      });

      console.log("uptimeRobotApiKey", uptimeRobotApiKey)
        console.log("uptimeRobotMonitor", uptimeRobotMonitor)
  /*try {
    const uptimeRobot = await new Client(process.env.UPTIME_ROBOT_KEY);
      
   await uptimeRobot.getMonitors({}, function(err, monitors) {
      console.log(monitors)
      uptimeRobotApiKey = true;
      let setup = 1;
      monitors.forEach(function(monitor) {
        if (
          monitor.url ==
          "https://" + process.env.PROJECT_DOMAIN + ".glitch.me"
        ) {
          uptimeRobotMonitor = true;
        }
      });

    });
    console.log("uptimeRobotApiKey", uptimeRobotApiKey)
        console.log("uptimeRobotMonitor", uptimeRobotMonitor)

  } catch (error) {
    console.log("error");
 
  }*/

  response.status(200).json({
    url: authURL,
    domain: domain,
    uptime: uptime,
    uptimeRobotApiKey: uptimeRobotApiKey,
    uptimeRobotMonitor: uptimeRobotMonitor
  });
});

app.get("/monitor", function(request, response) {
  let uptime = process.uptime();
  /* let uptime = process.uptime();
  response.status(200).json({
    message: uptime
  });*/
  try {
    const uptimeRobot = new Client(process.env.UPTIME_ROBOT_KEY);
    uptimeRobot.getMonitors({}, function(err, monitors) {
      if (err) throw response.status(200).json(err);
      let setup = 1;
      monitors.forEach(function(monitor) {
        if (
          monitor.url ==
          "https://" + process.env.PROJECT_DOMAIN + ".glitch.me"
        ) {
          setup = 2;
        }
      });

      response.status(200).json({
        status: setup,
        uptime: uptime

      });
    });
  } catch (error) {
    console.log("error");
    response.status(200).json({
      status: 0,
      uptime: uptime
    });
  }
});

app.get("/createMonitor", function(request, response) {
  const uptimeRobot = new Client(process.env.UPTIME_ROBOT_KEY);

  uptimeRobot.newMonitor(
    {
      friendlyName: process.env.PROJECT_DOMAIN,
      url: "https://" + process.env.PROJECT_DOMAIN + ".glitch.me",
      type: 1,
      interval: 5
    },
    function(err, res) {
      if (err) throw response.status(200).json(err);
      response.status(200).json(res);
    }
  );
});

app.get("/checkinstall", function(request, response) {
  if (!process.env.DISCORD_TOKEN) {
    console.log("no token");
    response.send(500, { error: "notoken" });
  } else {
    console.log("token");

    const testBotConfig = {
      token: process.env.DISCORD_TOKEN
    };

    const testBot = discordBotkit(testBotConfig);
    //  console.log(testBot);
    testBot.on("disconnect", event => {
      response.send(500, { error: "apierror" });
    });

    testBot.on("ready", event => {
      response.status(200).json({
        message: "yay"
      });
    });
  }
});

if (!process.env.DISCORD_TOKEN) {
  app.get("/", function(request, response) {
    response.sendFile(__dirname + "/views/install.html");
  });
} else {
  app.get("/", function(request, response) {
    response.sendFile(__dirname + "/views/index.html");
  });
}

// http://expressjs.com/en/starter/basic-routing.html
/*app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});*/

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
