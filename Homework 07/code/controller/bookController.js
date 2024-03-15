import {getBooks, saveBooks} from "../services/book_services.js";
import {Book} from "../model/bookModel.js";
export class BookController{
    async deleteBook(id){
        try{
            const books = await getBooks();
            const updatedBooks = books.filter(book => book.id !== id);
            saveBooks(updatedBooks);
            return{ message:`Book deleted successfully.` };
        }catch(error){
            throw new Error("Internal server error.");
        }
    }
    async updateBook(id, newData){
        try{
            const books = await getBooks();
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
            return{ message: `Book updated successfully.` };
        }catch(error){
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
            throw new Error("Internal server error.");
        }
    }
    async getAllBooks(){
        try{
            const books = await getBooks();
            return books;
        }catch(error){
            throw new Error("Internal server error.");
        }
    }
    async createBook(bookData){
        try{
            const newBook = new Book(
                Date.now(),
                bookData.bookTitle,
                bookData.isAvailable,
                bookData.genre,
                bookData.author,
                bookData.pages
            );
            const books = await getBooks();
            books.push(newBook);
            saveBooks(books);
            return newBook;
        }catch(error) {
            throw new Error("Internal server error.");
        }
    }
}
