import express from 'express';
import { getUsersForSideBar } from '../controllers/messages.controller.js';
import { protectedRoute } from '../middleware/auth.middleware.js';

const router = express.Router();

// /api/messages/users
router.get("/users",protectedRoute,getUsersForSideBar);

export default router;