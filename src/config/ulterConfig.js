// utils/multerUtils.js
const multer = require('multer');
const path = require('path');

// Configurar Multer para guardar las imágenes en el directorio 'assets/images'
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', 'assets', 'images'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

module.exports = upload;
