const fs = require("fs");
const http = require("http");
const WebSocket = require("ws");
const express = require("express");

const app = express();
app.use(express.static(__dirname + "/public"));
app.use("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

const port = process.env.PORT || 1234;

const server = http.Server(app, () => {});

const webSocketServer = new WebSocket.Server({ server });

// {ws: WebSocket, user: { id: string, type: client' | 'moderator' | 'observer' } }
const clients = [];

server.listen(port);
console.log(`Signaling server is now listening on port ${port}`);

// Broadcast to all users
webSocketServer.broadcast = data => {
  webSocketServer.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

let pingPongTimerInterval;

const ping = webSocket => {
  webSocket.send(JSON.stringify({ type: "Ping" }));
};

const pong = webSocket => {
  clearTimeout(pingPongTimerInterval);

  pingPongTimerInterval = setTimeout(() => {
    ping(webSocket);
  }, 10000);
};

webSocketServer.on("connection", (webSocket, request) => {
  ping(webSocket);

  const user = getUser(request.url);
  clients.push({
    ws: webSocket,
    user,
  });
  const allUsers = clients.map(c => c.user);

  console.log(
    `Client of type '${user.type}' connected. Total connected clients: ${webSocketServer.clients.size}`
  );

  webSocketServer.broadcast(
    JSON.stringify({
      type: "UserJoined",
      message: "User joined",
      user,
      allUsers,
    })
  );

  webSocket.onmessage = message => {
    console.log(message.data)
    const data = JSON.parse(message.data);

    if (data.type === "Pong") {
      pong(webSocket);
      return;
    }
    
    const client = clients.find(c => c.user.id === data.toUserId);
    if (client) {
      client.ws.send(message.data);
    }
  };

  webSocket.onclose = () => {
    const disconnectedClientIndex = clients.findIndex(c => c.ws === webSocket);

    const disconnectedUser = clients[disconnectedClientIndex].user;
    console.log(
      `Client disconnected. Total connected clients: ${webSocketServer.clients.size}`,
      disconnectedUser
    );

    clients.splice(disconnectedClientIndex, 1);

    // User left the room
    const allUsers = clients.map(c => c.user);
    webSocketServer.broadcast(
      JSON.stringify({
        type: "UserLeft",
        message: "User left",
        user: disconnectedUser,
        allUsers,
      })
    );
  };
});

function log(message, ...optionalParameters) {
  console.log(message, optionalParameters);
}

/**
 * Gets the user type from a query string
 * @param {string} requestUrl ex. /?type=client
 * @returns { id: string, type: client' | 'moderator' | 'observer' }
 */
function getUser(requestUrl) {
  const queryString = requestUrl.substr(1);
  return {
    id: findParameterFromQueryString(queryString, "userId"),
    type: findParameterFromQueryString(queryString, "userType"),
  };
}

/**
 * Returns the value of the parameter in a query string
 * @param {string} queryString : ex. ?type=client
 * @param {string} key : ex. type
 */
function findParameterFromQueryString(queryString, key) {
  if (!queryString) return null;
  if (!key) return null;

  let result = null;
  let tmp = [];

  var items = queryString.substr(1).split("&");
  for (var index = 0; index < items.length; index++) {
    tmp = items[index].split("=");
    if (tmp[0] === key) {
      result = decodeURIComponent(tmp[1]);
    }
  }
  return result;
}
