import express from "express";
import bookRouter from "./routes/routerBooks.js";
import userRouter from "./routes/userRoutes.js";

const app = express();
const PORT = 3000;
const HOST = "localhost";

app.use(express.json());

app.use(bookRouter);
app.use(userRouter);

app.listen(PORT, HOST, () => {
    console.log(`Server is running on port ${PORT}`);
});


