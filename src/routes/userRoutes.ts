import {Router, type Request, type Response} from 'express';
import User from '../models/User.js';

const router = Router();
const date_ajd = new Date();

router.get('/', async function(req: Request, res: Response) {    
    let users = await User.findAll();
    res.send(users);
});

router.post('/', async (req: Request, res: Response) =>{
    await User.create({nom : req.body.nom, prenom : req.body.prenom, createdAt : date_ajd.toLocaleDateString(), updatedAt : date_ajd.toLocaleDateString()});
    res.send((req.body));
});

router.delete('/:id', async (req: Request, res: Response) => {
    await User.destroy({
        where: {
            id: req.params['id']
        }
    });
    res.send(req.body);
});

export default router;