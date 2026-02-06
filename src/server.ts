import express from 'express';
import type { Request, Response } from 'express';

const  app = express();
const port = 3000;
const route = "/api/data"
const etudiants = [
{ id: 1, nom: "Dupont", prenom: "Jean" },
{ id: 2, nom: "Martin", prenom: "Sophie" },
{ id: 3, nom: "Doe", prenom: "John" },
];

app.get(`${route}`, (req: Request, res: Response) => {
    res.json(`${JSON.stringify(etudiants)}`);
});

app.listen(port, () => {
    console.log(`Serveur sur http://localhost:${port}${route}`);
});