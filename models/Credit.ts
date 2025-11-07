import { Schema, model } from "mongoose";

const creditSchema = new Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		desc: {
			type: String,
			max: 100,
		},
		img: {
			type: String,
		},
		date: {
			type: String,
		},
		is_achieved: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const Credit = model("Credit", creditSchema);

export default Credit;
