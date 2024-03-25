import { BookModel } from "../model/bookModel.js";
import errorEmitter from "../services/book_eventsErrors.js";
export class BookController{
    constructor(){
        this.bookModel = new BookModel();
    }

    async getAllBooks(req, res){
        try{
            const books = await this.bookModel.getAllBooks();
            res.send(books);
        }catch(error){
            errorEmitter.emit('error', error.message);
            res.status(500).send({ error: error.message });
        }
    }

    async getBookById(req, res){
        const id = req.params.id;
        try{
            if(!id){
                throw new Error("Invalid book ID.");
            }
            const book = await this.bookModel.getBookById(id);
            res.send(book);
        }catch(error){
            errorEmitter.emit('error', error.message);
            res.status(404).send({ error: error.message });
        }
    }

    async createBook(req, res){
        const{ bookTitle, isAvailable, genre, author, pages } = req.body;
        try{
            if(!bookTitle || !author || !genre || !pages){
                throw new Error("Missing required fields.");
            }
            const newBook = await this.bookModel.createBook(req.body);
            res.status(201).send(newBook);
        }catch(error){
            errorEmitter.emit('error', error.message);
            res.status(400).send({ error: error.message });
        }
    }

    async updateBook(req, res){
        const id = req.params.id;
        const newData = req.body;
        try{
            const updatedBook = await this.bookModel.updateBook(id, newData);
            res.send(updatedBook);
        }catch(error){
            errorEmitter.emit('error', error.message);
            res.status(404).send({ error: error.message });
        }
    }

    async deleteBook(req, res){
        const id = req.params.id;
        try{
            await this.bookModel.deleteBook(id);
            res.send("Book deleted successfully.");
        }catch(error){
            errorEmitter.emit('error', error.message);
            res.status(404).send({ error: error.message });
        }
    }
}

