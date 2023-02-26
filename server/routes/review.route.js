import express from 'express';
import {createReview , deleteReview , getReview} from '../controllers/review.controller.js'
import { verifyToken } from '../middleware/jwt';

const router = express.Router();
router.post("/" ,verifyToken , createReview);
router.get("/:id" , getReview);
router.delete("/:id" , deleteReview)



export default router;