import fsPromises from "fs/promises";
import path from "path";
const bookStoreDbPath = path.join("db", "books_store.db.json");
export async function getBooks(){
    try{
        const getDataBooks = await fsPromises.readFile(bookStoreDbPath, 'utf-8');
        return JSON.parse(getDataBooks);
    }catch(error){
        throw new Error("Unable to read books data.");
    }
}
export async function saveBooks(books){
    try{
        await fsPromises.writeFile(bookStoreDbPath, JSON.stringify(books, null, 2));
    }catch(error){
        throw new Error("Unable to save books data.");
    }
}
