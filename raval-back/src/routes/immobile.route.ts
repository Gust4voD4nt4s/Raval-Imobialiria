import { registerImmobile } from "../controllers/immobile.controller";
const router = require('express').Router()

router.post('/' ,registerImmobile)

export default router