import express from "express";
import "dotenv/config";
import connectDB from "./lib/db.js";
import colors from 'colors';
import { clerkMiddleware } from '@clerk/express';
import cors from 'cors';
// package.json
// "scripts": {
//   "start": "node -r dotenv/config index.js"
// }

const app = express();

app.use(express.json());
app.use(clerkMiddleware());

const FRONTEND_URL = process.env.FRONTEND_URL;
app.use(cors({
    origin: FRONTEND_URL,
    credentials: true,
}));

app.get('/health', (req, resp) => {
    resp.status(200).json({ ok: true });
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    connectDB();
    console.log(`server is running on PORT ${PORT}`.bgGreen);
})