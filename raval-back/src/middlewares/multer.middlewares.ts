import {Request} from 'express'
import multer from 'multer';

interface MulterFile {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    size: number;
    destination: string;
    filename: string;
    path: string;
    buffer: Buffer;
  }

const storage = multer.diskStorage({
  destination: function (req: Request, file: MulterFile, cb: (error: Error | null, destination: string) => void) {
    cb(null, '../uploads'); 
  },
  filename: function (req: Request, file: MulterFile, cb: (error: Error | null, destination: string) => void) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

module.exports = upload;