import {Router, type Request, type Response} from 'express';
import { basicAuth } from '../middlewares/basicAuth.js';

const router = Router();

/**
 * @swagger
 * /api/admin/basic:
 *   get:
 *     summary: Route admin protégée en HTTP Basic
 *     tags: [Admin]
 *     security:
 *       - basicAuth: []
 *     responses:
 *      200:
 *         description: Authentification Basic valide
 *      401:
 *         description: Non autorisé
 */
router.get("/basic", basicAuth, (req: Request, res: Response) => {
    res.json({message: "Bienvenue dans la zone admin Basic"});
});

export default router;