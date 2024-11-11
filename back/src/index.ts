import type {Request, Response} from "express";
import express, {Express} from "express";
import dotenv from "dotenv";
import cors from "cors";

const bodyParser = require('body-parser')
const db = require('./db')

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors(), bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/users', db.getUsers);
app.delete('/users/:id', db.deleteUser);
app.get('/users/:id/messages', db.getUserMessages);

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
