import cors from 'cors';
import dotenv from 'dotenv';
import express from "express";
const app = express();

import path from 'path';
const __dirname = path.resolve();
const PORT = process.env.PORT || 8800

dotenv.config();

app.use("/", express.static(path.join(__dirname, "/public")));

//middleware
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log("Backend server is running!");
});
