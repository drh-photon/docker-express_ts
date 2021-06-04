//Dependencies
import express, { Application, Request, Response, NextFunction } from 'express';
import path from 'path';
const app: Application = express();

const func = require('./simple/func');


//Middleware
//Static public folder
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.get('/', (req: Request, res: Response, next: NextFunction) => res.send("number is: " + func(2, 3)));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});