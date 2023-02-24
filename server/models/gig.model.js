import mongoose from 'mongoose';
const {Schema} = mongoose;

const GigSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique:true
    },
    
    
},{timestamps:true})
export default mongoose.model("Gig" , GigSchema);