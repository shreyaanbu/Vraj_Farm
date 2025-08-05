import multer from 'multer';
import path from 'path';

// Ensure the 'uploads/' directory exists
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads'); // <--- set the folder where files will be saved
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // avoid name clashes
  }
});

const upload = multer({ storage });

export default upload;
