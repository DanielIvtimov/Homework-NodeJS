import fsPromises from "fs/promises";
import EventEmitter from "events";
const eventEmitter = new EventEmitter();

export const finishTodo = async (id) => {
    const todos = await getTodos();
    const updatedTodos = todos.map(todo => {
        if(todo.id === id){
            return { id: todo.id, name: todo.name, isDone: true };
        }else{
            return todo;
        }
    });
    await fsPromises.writeFile("./db/todos.json", JSON.stringify(updatedTodos));
    console.log(`Todo with id ${id} has been marked as done.`);
    const date = new Date().toLocaleString();
    await saveText(id, `finished at ${date}`);
};

export const getTodos = async () => {
    const todos = await fsPromises.readFile("./db/todos.json", {encoding: "utf-8"});
    const parseTodos = JSON.parse(todos);
    return parseTodos;
};

export const createTodo = async (description) => {
    const todos = await getTodos();

    const todo = {
        id: Date.now(),
        name: description,
        isDone: false
    }

    todos.push(todo);

    await fsPromises.writeFile("./db/todos.json", JSON.stringify(todos));
}; 

export const removeTodo = async (id) => {
    const todos = await getTodos();
    const updatedTodos = todos.filter(todo => todo.id !== id);
    await fsPromises.writeFile("./db/todos.json", JSON.stringify(updatedTodos));
    console.log(`Todo with id ${id} has been removed.`);
    const date = new Date().toLocaleString();
    await saveText(id, `removed at ${date}`);
};

const saveText = async (id, operation) => {
    const printMessage = `Todo with ID ${id} is ${operation}\n`;
    await fsPromises.appendFile("./dadoteka.txt", printMessage);
};

eventEmitter.on('finishTodo', async (id) => {
    const printMessage = `Todo with ID ${id} is finished\n`;
    await saveText(id, printMessage);
});

eventEmitter.on('removeTodo', async (id) => {
    const printMessage = `Todo with ID ${id} is removed\n`;
    await saveText(id, printMessage);
});

export default eventEmitter; 


// Homework Very Bonus Todos 
// Napraviv copy paste od predhodnoto domasno sto go imav samo za Bonus 
// Za ova domasno napraviv promena vo funcijata (finishTodo) ta sto forEach go zameniv so .map kako sto zborevme i na casot :D 
// Isto taka za ova domasno upotrebiv (.toLocaleString();) bidejki imav problem 
// Casovnikot od (new Date();) mi go davase celoto zaedno spoeno 
// Na https://www.w3schools.com/ go pronajdov (.toLocaleString();) i go upotrebiv da go pisuva casovnikot kako sto treba :D 






