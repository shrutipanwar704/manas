import express from 'express';
import multer from 'multer';

const uploadRouter = express.Router(); // This initializes the router

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Ensure 'uploads/' directory exists
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Define the upload route
uploadRouter.post('/', upload.single('video'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded' });
    }

    res.status(200).json({
      success: true,
      message: 'File uploaded successfully',
      filePath: `/uploads/${req.file.filename}`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'File upload failed' });
  }
});

export default uploadRouter; // Ensure the router is exported
