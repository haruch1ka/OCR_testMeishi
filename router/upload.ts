import { Router, Request, Response } from "express";
import multer from "multer";

const router = Router();

// multerの設定
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./public/images");
	},
	filename: (req, file, cb) => {
		cb(null, req.body.imageName);
	},
});

const upload = multer({ storage });

//post
router.post("/", upload.single("file"), (req: Request, res: Response) => {
	try {
		return res.status(200).json("file uploaded successfully");
	} catch (error) {
		console.log(error);
		return res.status(500).json(error);
	}
});

export default router;
