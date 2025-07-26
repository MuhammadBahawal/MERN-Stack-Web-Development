// in this we will learn about the Event and emitor class 

import { EventEmitter } from "events";

const emitor = new EventEmitter();

emitor.on("data", (arg)=>{
    console.log(`this is my username ${arg.username} , this is my class ${arg.Class} `)
})

emitor.emit("data",{username :"Ali",Class : "BSSE"})