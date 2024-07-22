import { photosImmobile } from "../controllers/photos.controller"
const router = require('express').Router()


router.post('/photosImmobile/', photosImmobile)

export default router