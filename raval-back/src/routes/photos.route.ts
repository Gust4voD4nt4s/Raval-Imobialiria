import { photosProperty } from "../controllers/photos.controller"
const router = require('express').Router()


router.post('/photosProperty/', photosProperty)

export default router