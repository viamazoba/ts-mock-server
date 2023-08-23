import express, { Request, Response } from 'express';
import { tasks } from './data/tasks';

const app = express();
app.use(express.json());

const port = 3000;

app.get('/api', (_, res: Response) => {
    res.send('Hello World!');
});


app.listen(port, () => {
    console.log(`Server Running Up on port ${port}`);
});
