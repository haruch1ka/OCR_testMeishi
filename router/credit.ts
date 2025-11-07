import { Router, Request, Response } from "express";
import Credit from "../models/Credit";

const router = Router();

// CRUD

// Create
router.post("/", async (req: Request, res: Response) => {
	const newCredit = new Credit(req.body);
	try {
		await newCredit.save();
		return res.status(200).json(req.body);
	} catch (error) {
		return res.status(500).json(error);
	}
});

// Read
router.get("/", async (req: Request, res: Response) => {
	const credit = await Credit.find({ userId: "hogehoge" });
	try {
		return res.status(200).json(credit);
	} catch (error) {
		return res.status(500).json(error);
	}
});

// Update

// achievementsのupdate
router.put("/achievements/:id", async (req: Request, res: Response) => {
	const newCredit = new Credit(req.body);
	try {
		const credit = await Credit.findById(req.params.id);
		if (credit && credit.userId === req.body.userId) {
			const now = new Date();
			const format = (num: number) => String(num).padStart(2, "0");

			const formattedDate = `${now.getFullYear()}-${format(now.getMonth() + 1)}-${format(now.getDate())}`;
			req.body.date = formattedDate;
			await credit.updateOne({ $set: req.body });
			const savedPost = await credit.save();
			return res.status(200).json("The credit has been updated");
		} else {
			return res.status(403).json("You can update only your credit");
		}
	} catch (error) {
		return res.status(500).json(error);
	}
});
// Delete
router.delete("/:id", async (req: Request, res: Response) => {
	try {
		const credit = await Credit.findById(req.params.id);
		if (credit && credit.userId === req.body.userId) {
			await credit.deleteOne();
			return res.status(200).json("The credit has been deleted");
		} else {
			return res.status(403).json("You can delete only your credit");
		}
	} catch (error) {
		return res.status(500).json(error);
	}
});

export default router;
