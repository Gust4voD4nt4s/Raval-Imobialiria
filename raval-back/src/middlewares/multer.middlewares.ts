import {Request} from 'express'
import multer from 'multer';
import path, {extname} from 'path';

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

const random = () => Math.floor(Math.random() * 1000 + 1000);

const storage = multer.diskStorage({
  destination: function (req: Request, file: MulterFile, cb: (error: Error | null, destination: string) => void) {
    const uploadPath = path.resolve(__dirname,'../uploads');
    cb(null, uploadPath); 
  },
  filename: function (req: Request, file: MulterFile, cb: (error: Error | null, destination: string) => void) {
    cb(null, `${Date.now()}_${random()}${extname(file.originalname)}`);
  },
});

export const upload = multer({ storage });

