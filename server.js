require("dotenv").config();
const express = require("express");

const mongoose = require("mongoose");
const productRoute = require("./routes/productRoute");
const errorMiddleware = require("./middleware/errorMiddleware");
const cors = require('cors');

const app = express();
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/products", productRoute);

//const FRONTEND = process.env.FRONTEND
// var corsOptions={
//   origin:[FRONTEND,"http://example.com"],
//   optionsSuccessStatus:200
// }
// app.use(cors(corsOptions));

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello NODE API");
});

app.use(errorMiddleware);

mongoose.set("strictQuery", false);
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Node api app is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
