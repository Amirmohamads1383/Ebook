import mongoose from "mongoose";

const connectToDB = async () => {
    if (mongoose.connections[0].readyState) {
        return true
    } else {
        await mongoose.connect("mongodb://localhost:27017/ebook")
    }
}

export default connectToDB