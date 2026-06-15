import express from "express";
import "dotenv/config";
// package.json
// "scripts": {
//   "start": "node -r dotenv/config index.js"
// }


const app = express();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
})