import fs from 'fs';
const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
    { id: 3, title: "1984", author: "George Orwell", genre: "Dystopian" }
];
const directory = "booksData.txt";
books.forEach(book => {
    const bookInfo = `${book.title} by ${book.author} is of genre ${book.genre},\n`;
    fs.appendFileSync(directory, bookInfo);
});




