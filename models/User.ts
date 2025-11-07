const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			min: 5,
			max: 25,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			max: 50,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			min: 6,
			max: 50,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamp: true }
);
export default mongoose.model("User", userSchema);
