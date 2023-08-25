import express, { Request, Response } from 'express';
import { tasks } from './data/tasks';

const app = express();
app.use(express.json());

const port = 3000;
let newTasks = [... tasks]

app.get('/api/tasks', (_, res: Response) => {
    res.send(newTasks);
});

app.get('/api/tasks/:id', (req: Request, res: Response) => {
    const {id} = req.params
    const chooseTask = newTasks.filter((task)=>{
        return task.id.toString() === id
    })
    res.send(chooseTask);
});

app.delete('/api/tasks/:id', (req: Request, res: Response) => {
    const {id} = req.params
    const chooseTasks = newTasks.filter((task)=>{
        return task.id.toString() != id
    })

    newTasks = [... chooseTasks]
    res.send(newTasks);
});

app.post('/api/tasks', (req:Request, res: Response) => {
    const {task} = req.body
    newTasks = [
        ...tasks,
        task
    ]
    res.send(newTasks);
});


app.listen(port, () => {
    console.log(`Server Running Up on port ${port}`);
});
