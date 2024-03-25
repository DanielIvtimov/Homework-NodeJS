import { User } from "../model/userModel.js";

export class UserController{
  constructor(){
    this.userModel = new User(); 
  }

  async registerController(req, res){
    const{ firstName, lastName, email, password, permission } = req.body;
    try{
      const result = await this.userModel.register(firstName, lastName, email, password, permission); 
      res.status(201).send(result);
    }catch(error){
      res.status(400).send({ message: error.message });
    }
  }

  async loginController(req, res){
    const{ email, password } = req.body;
    if(!email || !password){
      return res.status(400).send({ message: "Missing email or password" });
    }
    try{
      const accessToken = await this.userModel.login(email, password); 
      res.send({ token: accessToken });
    }catch(error){
      res.status(400).send({ error: error.message });
    }
  }

  async logoutController(req, res){
    try{
      const result = await this.userModel.logout();
      res.status(200).send({ message: result });
    }catch(error){
      res.status(400).send({ message: error.message });
    }
  }
}

