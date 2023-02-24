import User from "../models/user.model.js";



export const deleteUser = async (req, res, next) => {
    const user = await User.findById(req.params.id);
  
    if (req.userId !== user._id.toString()) {
      return res.status(403).send("you can only delete your account");
    }
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("deleted.");
  };