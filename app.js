const fs = require("fs");
const http = require("http");
const WebSocket = require("ws");
const express = require("express");

const app = express();
{
  // Angular build sits in /public
  app.use(express.static(__dirname));
  app.use("*", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });
}

const port = process.env.PORT || 1234;

const server = http.Server(app, () => {});

const webSocketServer = new WebSocket.Server({ server });

/**
 * All users connected to the websocket
 * Type : {
 *    ws: WebSocket,
 *    user: {
 *      id: string,
 *      type: 'client' | 'moderator' | 'observer'
 *    }
 * }
 */
const clients = [];

let pingPongTimerTimeout;

server.listen(port);

console.log(`Signaling server is now listening on port ${port}`);

/**
 * Send a message to all connected users
 */
webSocketServer.broadcast = data => {
  webSocketServer.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

/**
 * Send a 'ping' message
 */
const ping = webSocket => {
  webSocket.send(JSON.stringify({ type: "Ping" }));
};

/**
 * Send a ping x minutes after receiving a pong message
 */
const pong = webSocket => {
  webSocket.send(JSON.stringify({ type: "Pong" }));
};

/**
 * websocket: websocket of the connected user
 * request.url ex. ws://localhost:1234/?userType=client&userId=1234-5234-5678-1234-4583
 */
webSocketServer.on("connection", (webSocket, request) => {
  // Send a ping message to the newly connected user
  //ping(webSocket);

  // get the user from the URL
  const user = createUserFromUrl(request.url);
  clients.push({
    ws: webSocket,
    user,
  });
  console.log(
    `Client of type '${user.type}' connected. Total connected clients: ${webSocketServer.clients.size}`
  );

  // Send a broadcast to all users showing the newly connected user
  const allUsers = clients.map(client => client.user);
  webSocketServer.broadcast(
    JSON.stringify({
      type: "UserJoined",
      message: "User joined",
      user,
      allUsers,
    })
  );

  // Receive messages from the connected user
  webSocket.onmessage = message => {
    const data = JSON.parse(message.data);

    if (data.type === "PingModo" || data.type === "PingClient" || data.type === "PingObs") {
      console.log(data.type);
      pong(webSocket);
      return;
    }
    if (data.type === "PingClient") {
      console.log(data.type);
      pong(webSocket);
      return;
    }
    if (data.type === "PingObs") {
      console.log(data.type);
      pong(webSocket);
      return;
    }

    console.log(data);

    // Send the message to the user with id = 'ToUserId'
    const client = clients.find(c => c.user.id === data.toUserId);
    if (client) {
      client.ws.send(message.data);
    }
  };

  webSocket.onclose = () => {
    const disconnectedClientIndex = clients.findIndex(client => client.ws === webSocket);

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
function createUserFromUrl(requestUrl) {
  const queryString = requestUrl.substr(1);
  return {
    id: findParameterFromQueryString(queryString, "userId"),
    type: findParameterFromQueryString(queryString, "userType"),
  };
}

/**
 * Returns the value of the parameter in a query string
 * @param {string} queryString : ex. ?userType=client&userId=123-465-786
 * @param {string} key : ex. userType
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
