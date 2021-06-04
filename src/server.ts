
import express, { Application, Request, Response, NextFunction } from 'express';

const func = require('./simple/func')
const app: Application = express()
const PORT = process.env.PORT || 3000

app.get('/', (req: Request, res: Response, next: NextFunction) => res.send("number is: " + func(2, 3)));

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
})