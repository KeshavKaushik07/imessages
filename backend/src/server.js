import express from "express";
import "dotenv/config";
import connectDB from "./lib/db.js";
import colors from 'colors';
import { clerkMiddleware } from '@clerk/express';
import cors from 'cors';
import fs from 'fs';
import path from "path";
// package.json
// "scripts": {
//   "start": "node -r dotenv/config index.js"
// }

const app = express();

const PORT = process.env.PORT || 4000;
const FRONTEND_URL = process.env.FRONTEND_URL;

const publicDir = path.join(process.cwd(),"public");


app.use(express.json());
app.use(clerkMiddleware());


app.use(cors({
    origin: FRONTEND_URL,
    credentials: true,
}));

app.get('/health', (req, resp) => {
    resp.status(200).json({ ok: true });
});

if(fs.existsSync(publicDir)){
    app.use(express.static(publicDir));

    app.get("/{*}any",(req,resp,next)=>{
        resp.sendFile(path.join(publicDir,"index.html"),(err)=> next(err));
    })
}


app.listen(PORT, () => {
    connectDB();
    console.log(`server is running on PORT ${PORT}`.bgGreen);
})