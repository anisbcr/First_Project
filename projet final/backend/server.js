import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/UserRoute.js";
import "dotenv/config.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
//app config
const app = express();
const PORT = process.env.PORT || 5000;
//middlezare
app.use(express.json());
app.use(cors());

// db connection
connectDB();

//api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.get("/", (req, res) => {
  res.send("API WORKING");
});
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
