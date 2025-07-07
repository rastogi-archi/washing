import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
    name : {
        type: String,
        required  :true,
    },
    machineNumber : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    startTime : {
        type: String,
        required: true
    },
    endTime : {
        type: String,
        required: true
    },
})

const BookingModel =  mongoose.models.User || mongoose.model("User", BookingSchema);
export default BookingModel;