const express = require('express');
const app = express();
const cors = require("cors");
require("./Connection/conn");
const userRoutes=require("./routes/userRoutes");
const recordRouter=require("./routes/recordRoutes");

app.use(express.json());
app.use(cors())


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
