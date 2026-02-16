import express from 'express';
import type { Request, Response } from 'express';
import userRouter from './routes/userRoutes.js';
import sequelize from './config/database.js';
import User from './models/User.js';

const app = express();
const port = 3000;
const route = "/api/hello/:name"

app.use(express.static('public'));
app.use(express.json());

const etudiants = [
{ id: 1, nom: "Dupont", prenom: "Jean" },
{ id: 2, nom: "Martin", prenom: "Sophie" },
{ id: 3, nom: "Doe", prenom: "John" },
];
const date_ajd = new Date();

app.get(`${route}`, (req: Request, res: Response) => {
    res.send(` {"message": "Bonjour ${req.params['name']}", "timestamp" : "${date_ajd.toLocaleDateString()}" }`);
});

app.use('/api/users', userRouter);

sequelize.sync().then(() => {
    console.log("Base de données synchronisée");
    app.listen(port, () =>{
        console.log(`Serveur ok http://localhost:${port}${route}`);
    });
});