import express from "express";
import "dotenv/config";
import connectDB from "./lib/db.js";
import colors from 'colors';
import { clerkMiddleware } from '@clerk/express';
import cors from 'cors';
import clerkWebHooks from './webhooks/clerk.webhook.js';

const app = express();

const PORT = process.env.PORT || 4000;
const FRONTEND_URL = process.env.FRONTEND_URL;

// we do not have to parse webhooks or clerk data it shoul be in raw format only
app.use("/api/webhooks/clerk",express.raw({type:"application/json"}),clerkWebHooks);

app.use(express.json());
app.use(clerkMiddleware());

// CORS now points directly to your future live frontend URL
app.use(cors({
    origin: [FRONTEND_URL, "http://localhost:5173"], 
    credentials: true,
}));

app.get('/health', (req, resp) => {
    resp.status(200).json({ ok: true });
});

// --- REMOVED ALL THE FS.EXISTS / PUBLIC STATIC COPIES FROM HERE ---

app.listen(PORT, () => {
    connectDB();
    console.log(`server is running on PORT ${PORT}`.bgGreen);
});