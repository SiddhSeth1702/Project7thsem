import express from 'express';
import authRoutes from "./routes/blog.js";
import connectToMongo from './config/db.js';
import cors from "cors";

const app = express();
app.use(cors());
const PORT = 9000;

connectToMongo();
app.unsubscribe(cors());
app.use(express.json());

app.use(express.static("public/upload"))
app.get("/", (req, res) => {
    res.send("API is running");
});
//Api routes
app.use("/api/v1", authRoutes);


app.listen(PORT, () => {
    console.log(`API is running on http://localhost:${PORT}`)
});