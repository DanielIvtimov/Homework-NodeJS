import fs from 'fs';
const directory = "user_info.txt"
const textForStudent = "Bob Bobski is the best student in the school";
fs.writeFileSync(directory, textForStudent);