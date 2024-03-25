import fsPromises from "fs/promises";
import path from "path";

const userDataPath = path.join("db", "users.json");

export const readFile = async (path) => {
  const contents = await fsPromises.readFile(path, "utf-8");
  return JSON.parse(contents);
};

const writeFile = async (path, data) => {
  await fsPromises.writeFile(path, JSON.stringify(data, null, 2));
};

export const readUsers = async () => {
  const users = await readFile(userDataPath);
  return users;
};

export const addUser = async (user) => {
  const users = await readUsers();
  users.push(user);
  await writeFile(userDataPath, users);
};
