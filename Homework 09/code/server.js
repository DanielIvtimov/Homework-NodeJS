import express from "express";
import { mongoDbConnection } from "./mongo_connection.js";
import routerRecipe from "./routes/recipe.routes.js";
const server = express();
server.use(express.json());

server.use(routerRecipe);

server.listen(3000, "localhost", async () => {
    console.log("Server is up and running");
    await mongoDbConnection();
});

