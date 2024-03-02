import fsPromises from "fs/promises";

export const finishTodo = async (id) => {
    const todos = await getTodos();
    const updatedTodos = [];
    todos.forEach(todo => {
        if (todo.id === id) {
            const updatedTodo = { id: todo.id, name: todo.name, isDone: true };
            updatedTodos.push(updatedTodo);
        } else {
            updatedTodos.push(todo);
        }
    });
    await fsPromises.writeFile("./db/todos.json", JSON.stringify(updatedTodos));
    console.log(`Todo with id ${id} has been marked as done.`);
};


// NAMED EXPORT
export const getTodos = async () => {
    // When we read JSON, it is stringified
    const todos = await fsPromises.readFile("./db/todos.json", {encoding: "utf-8"});
    const parseTodos = JSON.parse(todos);
    
    return parseTodos;
};

// NAMED EXPORT
export const createTodo = async (description) => {
    // PARSED TODOS FROM todos.json
    const todos = await getTodos();

    const todo = {
        id: Date.now(), // miliseconds of current time
        name: description,
        isDone: false
    }

    todos.push(todo);

    await fsPromises.writeFile("./db/todos.json", JSON.stringify(todos))
}; 

export const removeTodo = async (id) => {
    const todos = await getTodos();
    const updatedTodos = todos.filter(todo => todo.id !== id);
    await fsPromises.writeFile("./db/todos.json", JSON.stringify(updatedTodos));
    console.log(`Todo with id ${id} has been removed.`);
};
