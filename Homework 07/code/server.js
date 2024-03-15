import express from "express";
import fs from "fs";
import {getBooks, saveBooks} from "./services/book_services.js";
import {BookController} from "./controller/bookController.js";
import {Book} from "./model/bookModel.js";
const server = express();
server.use(express.json())

server.get('/', (request, response) => {
    response.send("<p>Server is live.</p>");
});

server.delete('/books/:id',async(request, response) => {
    try{
        const bookId = request.params.id;
        const controller = new BookController();
        const message = await controller.deleteBook(bookId);
        response.status(200).send(message);
    }catch(error){
        response.status(404).send({ message: error.message });
    }
});

server.put('/books/:id',async(request, response) => {
    try{
        const bookId = request.params.id;
        const newData = request.body;
        const controller = new BookController();
        const message = await controller.updateBook(bookId, newData);
        response.status(200).send(message);
    }catch(error){
        response.status(404).send({ message: error.message });
    }
});


server.get('/books',async(request, response) => {
    try{
        const controller = new BookController(); 
        const books = await controller.getAllBooks(); 
        response.send(books);
    }catch(error){
        response.status(404).send({ message: error.message });
    }
});

server.get('/books/:id',async(request, response) => {
    try{
        const controller = new BookController();
        const book = await controller.getBookById(request.params.id); 
        response.json(book);
    }catch(error){
        response.status(404).send({ message: error.message });
    }
});

server.post('/books',async(request, response) => {
    try{
        const controller = new BookController();
        const newBook = await controller.createBook(request.body); 
        response.status(201).json(newBook);
    }catch(error){
        response.status(404).send({ message: error.message });
    }
});

server.listen(3000, 'localhost', () => {
    console.info('Server is up and running.');
});
