import express from "express";
import fs from "fs";
import {getBooks, saveBooks} from "./services/book_services.js";
const server = express();
server.use(express.json())

server.get('/', (request, response) => {
    response.send("<p>Server is live.</p>");
});

server.delete('/books/:id',async(request, response) => {
    try{
        const bookId = request.params.id;
        const books = await getBooks();
        const updatedBooks = books.filter(book => book.id !== bookId);
        saveBooks(updatedBooks);
        response.status(200).send({ message: `Book deleted successfully.` });
    }catch(error){
        response.status(404).send({ message: "Internal server error." });
    }
});

server.put('/books/:id',(request, response) => {
    try{
        const bookId = request.params.id;
        const newData = request.body;
        const books = getBooks();
        const updatedBooks = books.map(book => {
            if(book.id === bookId){
                return{
                    id: book.id,
                    title: newData.title || book.title,
                    isAvailable: newData.isAvailable || book.isAvailable,
                    genre: newData.genre || book.genre,
                    author: newData.author || book.author,
                    pages: newData.pages || book.pages
                };
            }
            return book;
        });
        saveBooks(updatedBooks); 
        response.status(200).send({ message: `Book updated successfully.` });
    }catch(error){
        response.status(404).send({ message: "Internal server error." }); 
    }
});



server.get('/books', (request ,response) => {
    const getDataBooks = fs.readFileSync('books_store.db.json', 'utf-8');
    const books = JSON.parse(getDataBooks);
    response.json(books);
})

server.get('/books/:id', (request, response) => {
    const bookData = request.params.id;
    const getDataBooks = fs.readFileSync('books_store.db.json', 'utf-8');
    const books = JSON.parse(getDataBooks);
    const certainBook = books.find(book => book.id === bookData);
    if (!certainBook) {
        response.status(404).json({ message: `Book with ID ${bookData} was not found` });
    } else {
        response.json(certainBook);
    }
});

server.post('/books', (request, response) => {
    const bookData = request.body;
    const newBook = {
        id: Date.now(), 
        bookTitle: bookData.bookTitle,
        isAvailable: bookData.isAvailable,
        genre: bookData.genre,
        author: bookData.author,
        pages: bookData.pages
    };
    const getOurDataBooks = fs.readFileSync('books_store.db.json', 'utf-8');
    const books = JSON.parse(getOurDataBooks);
    books.push(newBook);
    fs.writeFileSync('books_store.db.json', JSON.stringify(books, null, 2));
    response.status(201).json(newBook);
})

server.listen(3000, 'localhost', () => {
    console.info('Server is up and running.');
});