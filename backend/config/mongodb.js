import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on("connected", () => {
        console.log("DB Connected");
    });

    return mongoose.connect(
        `${process.env.MONGODB_URI}/vraj-kesar-farm`,
        {
            serverSelectionTimeoutMS: 10000,
        }
    );
};

export default connectDB;
