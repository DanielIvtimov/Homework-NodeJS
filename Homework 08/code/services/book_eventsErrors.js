import fsPromises from "fs/promises";
import { EventEmitter } from "events";

const errorEmitter = new EventEmitter();

errorEmitter.on('error', async (errorData) => {
    const data = `\n${errorData}, happened at: ${new Date().toLocaleString()}.`;
    try{
        await fsPromises.appendFile("errors.txt", data);
    }catch(error){
        console.error("Error writing to file:", error);
    }
});

export default errorEmitter;