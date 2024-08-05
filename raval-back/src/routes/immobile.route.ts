import { getImmobile, registerImmobile } from "../controllers/immobile.controller";
const router = require('express').Router()

router.post('/' ,registerImmobile)

router.get('/', getImmobile)


export default router