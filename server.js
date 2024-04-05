const express = require("express");
const app = express();
const mongoose = require("mongoose");

//routes
app.get("/", (req, res) => {
  res.send("Hello NODE API 2");
});

mongoose.set("strictQuery",false);
mongoose
  .connect(
    "mongodb+srv://dheerajkamble:abcd1234@merngalaxy.pweircs.mongodb.net/Node-API?retrywrites=true&w=majority&appName=merngalaxy"
  )
  .then(() => {
    console.log("connected to MongoDB");

    app.listen(3000, () => {
        console.log("Node api app is running on port 3000");
      });
      
  })
  .catch((error) => {
    console.log(error);
  });
