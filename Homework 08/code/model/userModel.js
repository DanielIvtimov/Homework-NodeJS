import { v4 as uuid } from "uuid";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { readUsers, addUser } from "../services/user_services.js";

dotenv.config();

function generateToken(user){
    const tokenPayload = {
      id: user.id,
      email: user.email,
      permission: user.permission
    };
  
    const accessToken = jwt.sign(tokenPayload, process.env.SECRET_KEY, { expiresIn: "5h" });
    return accessToken;
  }

export class User{
    async register(firstName, lastName, email, password, permission){
        const users = await readUsers();
        if(!email || !password){
            throw new Error("Email or password is missing");
        }
        if(email.length <= 3 || password.length <= 3){
            throw new Error("Email or password is too short");
        }
        const userExist = users.some((u) => u.email === email);
        if(userExist){
            throw new Error(`User with email: ${email} already exists.`);
        }

        const id = uuid();
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = { id, firstName, lastName, email, hashedPassword, permission };

        try{
            await addUser(newUser);
            return newUser;
        }catch(error){
            throw new Error("Error at register user.");
        }
    }

    async login(email, password){
        const users = await readUsers();
        const user = users.find((u) => u.email === email);
        if(!user){
          throw new Error(`User with email: ${email} does not exist.`);
        }
        const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);
        if(!isPasswordValid){
          throw new Error("Invalid password.");
        }
        const accessToken = generateToken(user);
        return accessToken;
      }
    
    async logout(){
        return "Logout Successful";
    }
}
