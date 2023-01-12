import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";


// todo import routes

const app = express();
dotenv.config();

app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

// todo use routes

const port = process.env.PORT || 5000;

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI)
.then(() => app.listen(port, () => console.log(`Server running on port http://localhost:${port}`)))
.catch((error) => console.log(`${error} did not connect`));