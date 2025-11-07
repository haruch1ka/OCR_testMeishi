import { Schema, model } from "mongoose";

// GeoJSON MultiLineString Schema
const multiLineStringSchema = new Schema({
	type: {
		type: String,
		enum: ["MultiLineString"],
		required: true,
	},
	coordinates: {
		type: [[[Number]]],
		required: true,
	},
});

const MultiLineString = model("MultiLineString", multiLineStringSchema);

export default MultiLineString;
