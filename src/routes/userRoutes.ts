import {Router, type Request, type Response} from 'express';
import User from '../models/User.js';

const router = Router();
const date_ajd = new Date();

router.get('/', async function(req: Request, res: Response) {    
    try{
        let users = await User.findAll();
        res.status(200).json(users);
    } catch (error){
        console.error(error);
        res.status(500).send("Erreur serveur");
    }
});

router.post('/', async (req: Request, res: Response) =>{
    try{
        await User.create({nom : req.body.nom, prenom : req.body.prenom, createdAt : date_ajd.toLocaleDateString(), updatedAt : date_ajd.toLocaleDateString()});
        res.status(201).json(req.body);
    } catch (error){
        console.log(error);
        res.status(500).send("Erreur serveur");
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    try{
        await User.destroy({
            where: {
                id: req.params['id']
            }
        });
        res.status(204).json(req.body);

    }catch (error){
        console.log(error);
        res.status(500).send("Erreur serveur");
    }
});

export default router;