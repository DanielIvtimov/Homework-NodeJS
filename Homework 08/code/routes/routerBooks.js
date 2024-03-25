import { Router } from "express";
import { BookController } from "../controller/bookController.js";
import { authenticateUser} from "../middlewear/userMiddlewear.js";

const booksRouter = Router();
const bookController = new BookController();

booksRouter.get('/books', async (req, res) => {
  await bookController.getAllBooks(req, res);
});

booksRouter.post('/books', authenticateUser ,async (req, res) => {
  await bookController.createBook(req, res);
});

booksRouter.get('/books/:id', async (req, res) => {
  await bookController.getBookById(req, res);
});

booksRouter.put('/books/:id', authenticateUser ,async (req, res) => {
  await bookController.updateBook(req, res);
});

booksRouter.delete('/books/:id', authenticateUser ,async (req, res) => {
  await bookController.deleteBook(req, res);
});

export default booksRouter;


