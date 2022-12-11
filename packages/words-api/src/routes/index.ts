import { Request, Response, Router } from "express";
import dbData from '../db.json';

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  res.send(dbData.rows[0])
});

export default router;
