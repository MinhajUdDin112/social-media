import mongoose from "mongoose"

const postSchema = mongoose.Schema({
    userId:{ type:String, required:true },
    desc: String,
    likes:[],
    image:String,

},{timestamps:true});

var Postmodel = mongoose.model('Posts', postSchema);
export default Postmodel