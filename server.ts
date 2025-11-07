import dotenv from "dotenv";
import express from "express";
import path from "path";
import cors from "cors";

const PORT = "5000";

// import routes
import creditRoute from "./router/credit";
import uploadRoute from "./router/upload";

// connect to mongoDB
dotenv.config();

// boot the app
const app = express();

// express middleware
const corsOptions = {
	origin: ["http://localhost:5173"],
};
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use(cors(corsOptions));
app.use(express.json());

// endpoints
app.use("/api/credit", creditRoute);
app.use("/api/upload", uploadRoute);

// connect to db
app.get("/", (req, res) => {
	res.send("Server is Running. Please access from Frontend");
});
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
