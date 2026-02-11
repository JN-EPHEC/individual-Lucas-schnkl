import express from 'express';
import type { Request, Response } from 'express';
import userRouter from './routes/userRoutes.js';

const  app = express();
const port = 3000;
const route = "/api/hello/:name"

const etudiants = [
{ id: 1, nom: "Dupont", prenom: "Jean" },
{ id: 2, nom: "Martin", prenom: "Sophie" },
{ id: 3, nom: "Doe", prenom: "John" },
];
const date_ajd = new Date();

app.get(`${route}`, (req: Request, res: Response) => {
    res.send(` {"message": "Bonjour ${req.params['name']}", "timestamp" : "${date_ajd.toLocaleDateString()}" }`);
});

app.listen(port, () => {
    console.log(`Serveur sur http://localhost:${port}${route}`);
});

app.use('/api/users', userRouter);