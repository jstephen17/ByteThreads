import mongoose from "mongoose"

export const connectToDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB Connected to: " + connect.connection.host);

    } catch (error){
        console.log("Error: " + error.message);
        process.exit(1); // Code 1 means fails, 0 for success
    }
}