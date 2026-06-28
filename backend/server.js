import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
    res.send("API Working");
});
//temporary middleware for request logging:
app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});
const start = async () => {
    try {
        await connectDB();
        await connectCloudinary();

        app.listen(port, () => {
            console.log(`Server started on ${port}`);
        });
    } catch (err) {
        console.error(err);
    }
};

start();
