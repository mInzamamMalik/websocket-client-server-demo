var server = require("WS").Server;
// import  {Server} from "WS"
var s = new server({ port: 3001 })


// s.once
s.on("connection", (ws) => {
    console.log("i got connected a new client");
    // console.log("all connected clients array: ", s.clients)

    // // to send message to all connected clients
    // s.clients.map(eachClient=>{
    //     eachClient.send("some message" + actualMessage)
    // })


    // any message sent by the client will receive here
    ws.on('message', actualMessage => {
        console.log("received: ", actualMessage);
        ws.send("reply from server")
    })

    //when a browser window close, or somehow a client is disconnect
    ws.on("close", () => {
        console.log("i Lost a client");
    })
})