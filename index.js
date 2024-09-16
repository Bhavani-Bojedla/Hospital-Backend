const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
require('dotenv').config();
const MONGO_URL = process.env.MONGO_URL;
const userRoutes=require("./routes/userRoutes");
const recordRouter=require("./routes/recordRoutes");

app.use(express.json());
app.use(cors());

// Database connection
const dbConnect = async () => {
  try {
    await mongoose.connect(MONGO_URL) .then(()=>{
        console.log("connected to db")
      })
  } catch (error) {
     console.log(error);
  } 
};

dbConnect();

// Routes
app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/users",userRoutes);
app.use("/record",recordRouter);
// Start server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
