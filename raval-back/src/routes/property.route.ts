import { getProperty, registerProperty } from "../controllers/property.controller";
const router = require('express').Router()

router.post('/' ,registerProperty)

router.get('/', getProperty)


export default router