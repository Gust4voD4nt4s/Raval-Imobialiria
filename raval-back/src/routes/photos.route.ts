import { photosImmobile } from "../controllers/photos.controller"
import { upload } from "../middlewares/multer.middlewares"
const router = require('express').Router()


router.post('/photosImmobile/', upload.array('files'), photosImmobile)

export default router