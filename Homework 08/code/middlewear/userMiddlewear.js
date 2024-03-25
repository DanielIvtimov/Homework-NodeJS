import jwt from 'jsonwebtoken';

export const authenticateUser = (req, res, next) => {
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).send("Token does not exist");
    }
    try{
        const userPayload = jwt.verify(token, process.env.SECRET_KEY);
        console.log("userPayload in authenticate", userPayload);
        req.user = userPayload;
        if(req.user.permission === "user"){
            return res.status(403).send("Forbidden");
        }
        next();
    }catch(error){
        return res.status(401).send("Invalid token");
    }
};
export const authorizeAdmin = (req, res, next) => {
    if(!req.user || req.user.permission !== "admin"){
        return res.status(403).send("Forbidden");
    }
    next();
};


