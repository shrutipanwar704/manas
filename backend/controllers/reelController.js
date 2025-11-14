import reelModel from "../models/reelModel.js";
import cloudinary from "../config/cloudinary.js";  // Assuming cloudinary.js handles video uploads

const uploadReel = async (req, res) => {
    try {
        const { userId, title, description } = req.body;

        // Upload video to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, {
            resource_type: "video",  // Specify that it's a video
            public_id: `reels/${Date.now()}`
        });

        const thumbnailResult = await cloudinary.uploader.upload(req.file.path, {
            resource_type: "image",  // You might also want to upload a thumbnail
            public_id: `reels/thumbnails/${Date.now()}`
        });

        // Create new reel entry in DB
        const newReel = new reelModel({
            userId,
            videoUrl: result.secure_url,
            thumbnailUrl: thumbnailResult.secure_url,
            title,
            description
        });

        await newReel.save();

        res.json({ success: true, message: "Reel uploaded successfully", newReel });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { uploadReel };
