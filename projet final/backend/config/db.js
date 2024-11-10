import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect("mongodb+srv://anis:456123@cluster0.o7gp2.mongodb.net/food-del")
    .then(() => console.log("DB Connected"));
};
