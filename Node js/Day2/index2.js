import { promises as fs, write, writeFile } from 'fs';

const managefile = async () => {
    try {
        await fs.writeFile("text.txt", "hello thi is asyncawait to write anything in file");

        await fs.appendFile("text.txt", "hello thi is asyncawait to write anything in file");

       const read =  await fs.readFile("text.txt","utf-8")
        console.log(read);
        
        await fs.unlink("text.txt",);


        

    } catch (error) {
        console.log(error)
    }
} 

managefile();