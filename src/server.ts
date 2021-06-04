
import express, {Application, Request, Response, NextFunction }from 'express';
const func = require('./simple/func')
const app: Application = express()
const port = process.env.port || 3000

app.get('/', (req:Request, res: Response, next: NextFunction) => res.send("number is: " + func(1,2)));

app.listen(port, () => {
console.log(`running on port ${port}`);
})