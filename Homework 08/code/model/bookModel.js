import { Book } from "../entity/entityBook.js";
import { getBooks, saveBooks } from "../services/book_services.js";
import errorEmitter from "../services/book_eventsErrors.js";
import { v4 as uuid } from "uuid";
export class BookModel {

    async getAllBooks(){
        try{
            const books = await getBooks();
            return books;
        }catch(error){
            errorEmitter.emit('error', error.message);
            throw new Error("Internal server error.");
        }
    }

    async getBookById(id){
        try{
            const books = await getBooks();
            const book = books.find(book => book.id === id);
            if(!book){
                throw new Error(`Book was not found.`);
            }
            return book;
        }catch(error){
            errorEmitter.emit('error', error.message);
            throw new Error("Internal server error.");
        }
    }

    async createBook(bookData){
        try{
            const newBook = new Book(
                uuid(),
                bookData.bookTitle,
                bookData.isAvailable,
                bookData.genre,
                bookData.author,
                bookData.pages
            );
            const books = await getBooks();
            books.push(newBook);
            await saveBooks(books);
            return newBook;
        }catch(error){
            errorEmitter.emit('error', error.message);
            throw new Error("Internal server error.");
        }
    }

    async updateBook(id, newData){
        try{
            const books = await getBooks();
            const bookToUpdate = books.find(book => book.id === id);
            if(!bookToUpdate){
                throw new Error(`Book with id ${id} not found.`);
            }
            const updatedBooks = books.map(book => {
                if(book.id === id){
                    return{
                        id: book.id,
                        bookTitle: newData.bookTitle || book.bookTitle,
                        isAvailable: newData.isAvailable || book.isAvailable,
                        genre: newData.genre || book.genre,
                        author: newData.author || book.author,
                        pages: newData.pages || book.pages
                    };
                }
                return book;
            });
            saveBooks(updatedBooks);
            return { message: `Book updated successfully.` };
        }catch(error){
            errorEmitter.emit('error', error.message);
            throw new Error("Internal server error.");
        }
    }
    
    async deleteBook(id){
        try{
            const books = await getBooks();
            const bookToDelete = books.find(book => book.id === id);
            if(!bookToDelete){
                throw new Error(`Book with id ${id} not found.`);
            }
            const updatedBooks = books.filter(book => book.id !== id);
            saveBooks(updatedBooks);
            return { message: `Book with id ${id} deleted successfully.` };
        }catch(error){
            errorEmitter.emit('error', error.message);
            throw new Error("Internal server error.");
        }
    }
}





