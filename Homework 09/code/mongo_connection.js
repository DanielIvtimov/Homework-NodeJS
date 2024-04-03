import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const mongoDbConnection = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            dbName: "store_recipe",
        });
        console.log("Success connection with data base");
    }catch(error){
        throw new Error("Connection to data base failed.");
    }
};
