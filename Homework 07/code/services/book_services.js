import fs from "fs";

export function getBooks() {
    const getDataBooks = fs.readFileSync('books_store.db.json', 'utf-8');
    return JSON.parse(getDataBooks);
}

export function saveBooks(books) {
    fs.writeFileSync('books_store.db.json', JSON.stringify(books, null, 2));
}
