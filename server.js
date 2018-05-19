var server = require("WS").Server;
// import  {Server} from "WS"
var s = new server({ port: 3001 })


// s.once
s.on("connection", (ws) => {


    // any message sent from the client will receive here
    ws.on('message', actualMessage => {
        console.log("received: ", actualMessage);

        if (actualMessage == "message from client") {
            ws.send("reply from server")
        }

        ws.send("reply from server")
    })


})