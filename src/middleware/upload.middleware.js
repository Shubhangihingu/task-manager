// const path = require('path');
const multer = require('multer');                     // Multer is used for handeling File Uploads

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: fileStorageEngine });

module.exports = upload;