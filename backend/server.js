import express from "express";
import products from "./data/products.js";
import connectToDB from "./db/db.js";
import dotenv from "dotenv";
import cors from "cors";

// import routes
import prductRoutes from "./routes/productRout.js";

// connect to database
connectToDB();

// dotenv config
dotenv.config();

// initializing app
const app = express();

app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);

// products routes
app.use("/api/products", prductRoutes);

// app config
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(
    `Server runing in ${process.env.NODE_ENV} mode on port ${PORT}`.cyan.bold
      .underline
  )
);
