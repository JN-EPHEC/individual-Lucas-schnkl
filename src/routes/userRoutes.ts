import {Router, type Request, type Response} from 'express';
import User from '../models/User.js';

const router = Router();
const date_ajd = new Date();

router.get('/', async function(req: Request, res: Response) {    
    let users = await User.findAll();
    res.send(users);
});

router.post('/', (req: Request, res: Response) =>{
    User.create({nom : "testNom", prenom : "testPrenom", createdAt : date_ajd.toLocaleDateString(), updatedAt : date_ajd.toLocaleDateString()});
    res.send((req.body));
});

router.delete('/:id', (req: Request, res: Response) => {
    User.destroy({
        where: {
            id: req.params['id']
        }
    });
    res.send(req.body);
});

export default router;