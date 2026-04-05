import type { Request, Response, NextFunction } from 'express';

export const basicAuth = (req: Request, res: Response, next: NextFunction) => {
    const reponse = req.headers.authorization;
    if (!reponse){
        res.status(401).json({ msg : "Authorization headers manquant" });
    }else if (reponse.slice(0,6) === "Basic"){
        const base64String = reponse.slice(6);
        const credentials = Buffer.from(base64String, 'base64').toString('utf-8');
        const username = credentials.split(":")[0];
        const password = credentials.split(":")[1];

        if (username === "admin" && password === "supersecret"){
            next()
        }else{
            const msg = "Accès refusé, vous n'êtes pas admin"
            res.status(401).json({msg});
        }
    }
} 