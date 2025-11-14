import multer from 'multer';

// Set up storage engine for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify the folder to save the files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname); // Create a unique filename
  }
});

// Filter only video files
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('video/')) {
    cb(null, true);
  } else {
    cb(new Error('Please upload a video file'), false);
  }
};

// Create multer instance
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 100 * 1024 * 1024 } // Limit file size to 100MB
});

export default upload;
