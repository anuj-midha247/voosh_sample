import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required:true,
    },
    phone: {
        type: Number,
        required:true,
    },
    password: {
        type: String || Number,
        required: true,
        minLength:6,
    },
});


export default mongoose.model("User",userSchema)