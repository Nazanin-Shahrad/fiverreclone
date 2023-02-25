import mongoose from 'mongoose';
const {Schema} = mongoose;

const GigSchema = new Schema({
    userId:{
        type: String,
        required :true,
    },
    title:{
        type: String,
        required :true,
    },
    desc:{
        type: String,
        required :true,
    },
    totalStars:{
        type: Number,
        default:0,
    },
    starNumber:{
        type: Number,
        default:0,
    },
    cat:{
        type: String,
        required :true,
    },
    price:{
        type: Number,
        required :true,
    },
    cover:{
        type: String,
        required :true,
    },
    images:{
        type: [String],
        required :false,
    },
    shortTitle:{
        type: String,
        required :true,
    },
    shortDesc:{
        type: String,
        required :true,
    },
    deliveryTime:{
        type: Number,
        required :true,
    },
    revisionNumber:{
        type: Number,
        required :true,
    },
    features:{
        type: [String],
        required :false,
    },
    sales:{
        type: Number,
        default :0,
    },
    
    
},{timestamps:true})
export default mongoose.model("Gig" , GigSchema);

// {
    
//     "title" : "the first Gig 1",
//     "desc":"this is the first Gig I create",
//     "totalStar":5,
//     "starNumber":4,
    
//     "cat":"design",
//     "price":101,
   
//     "cover":"https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     "images":["https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600", "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600", "https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"],
//     "shortTitle":"Gig 1",
//     "shortDesc":"Gig 1",
//     "deliveryTime":3,
//     "revisionNumber":3,
//     "features":["feature 1" , "feature 2" , "feature 3"]
   
// }