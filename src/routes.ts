import { Router } from "express";
import { createUseController } from "./useCases/CreateUser";

const router = Router();

router.post('/users', (req, res) => {
    return createUseController.handle(req, res);
})

export { router }