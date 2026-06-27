import { getAuth } from "@clerk/express";
import userModel from "../model/user.model.js";

export async function protectedRoute(req, resp, next) {
    try {

        const { userId } = getAuth(req);

        console.log("===== AUTH MIDDLEWARE =====");
        console.log("userId from Clerk:", userId);
        if (!userId) {
            resp.status(401).json({ success: false, message: "unauthorized user" });
            return;
        }

        const user = await userModel.findOne({ clerkId: userId });

        if (!user) {
            resp.status(404).json({
                success: false,
                message: "user not found"
            });

            return;
        }

        console.log("Mongo user:", user);

        req.user = user;

        next();

    } catch (error) {
        resp.status(500).json({
            success: false,
            message: `error in protectedRoute middleware :- ${error}`
        })
    }
}