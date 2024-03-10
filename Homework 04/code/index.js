import fsPromises from "fs/promises";
import { getTodos, createTodo, finishTodo, removeTodo } from "./very_bonus.js";

console.log(await getTodos());

await createTodo("Wash the Dishes");
await createTodo("Study NodeJS");

const todoIdToFinish = 1709148441916;
await finishTodo(todoIdToFinish);

const todoIdToRemove = 1709148441916; 
await removeTodo(todoIdToRemove);


