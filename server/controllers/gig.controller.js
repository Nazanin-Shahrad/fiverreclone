import Gig from '../models/gig.model.js';
import createError from '../utils/createError.js';

export const createGig = async (req, res, next) => {
    if(!req.isSeller) return next(createError(403, "Only seelers can create a gig !"));

    const newGig = new Gig({
        userId : req.userId,
        ...req.body,
    });

    try{
        const savedGig = await newGig.save();
        res.status(201).json(savedGig);

    }catch(err){
        next(err);
    }
}

export const deleteGig = async ( req, res, next) => {
    try{
        const gig = await Gig.findById(req.params.id);
        if(gig.userId !== req.userId) return next(createError(403 , " You can delete only your gig!"));

        await Gig.findByIdAndDelete(req.params.id);
        res.status(200).send("Gig has been deleted!");

    }catch(err){
        next(err);
    }
}