
import * as express from "express";

const app = express();
app.set("port",process.env.PORT || 3000);

var http = require("http").Server(app);


app.get("/",(req,res)=>{
    res.send("hello ts world");
});

const server = http.listen(3000,function(){
    console.log("listening on *:3000");
});