import mongoose from "mongoose";

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Mongobd connected");
    } catch (error) {
        console.log("mongodb server error");
        console.log(error);
    }
}
export default connectDB