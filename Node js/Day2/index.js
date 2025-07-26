
import fs from "fs"

fs.writeFile("text.txt", "hello thi is the data ", (err, data) => {
    if (err) {
        console.log(err)
           return;
    }
    console.log(data)
})

fs.appendFile("text.txt", "this is the appedn data ", (err) => {
    if (err) {
        console.log(err);
           return;

    }
    console.log("data entered")
})

fs.readFile("text.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("data not find");
        return;
    }

    console.log(data);


})

fs.unlink("text.txt",(err)=>{
    if (err) {
        console.log(err);
        return;
    }
    console.log("file deleted")

})