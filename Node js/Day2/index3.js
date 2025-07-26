import { promises as fs } from "fs";

const myfun = async () => {
    try {
        await fs.mkdir('./data', { recursive: true });
        console.log("Folder created or already exists");

        await fs.writeFile("./data/demo.txt", "hello this is demo data file");
        console.log("File written");

        await fs.rename('./data/demo.txt', './data/text.txt');
        console.log("File renamed");

        await fs.unlink("./data/text.txt");
        console.log("File deleted");

        await fs.rm("./data", {recursive:true,},{force : true})
        console.log("folder deleted");
        

    } catch (error) {
        console.log(error);
    }
}

myfun();
