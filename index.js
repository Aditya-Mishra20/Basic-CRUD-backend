// this is the brain of backend

const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");
const app = express();

//Middleware
// not allowed to pass json by default so use middleware to configurate - below is method
app.use(express.json());
// with below you can pass any format øther than json
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

// req = client sends to server
// res = server sends back

app.get("/", function (req, res) {
  res.send("Hello World from Node API");
});

mongoose
  .connect(
    "mongodb+srv://admin:pcro8df6Mw1VrKry@backenddb.svrmehr.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB"
  )
  .then(() => {
    console.log("Connected! to database");
    app.listen(3000, () => {
      console.log("server running on port 3000");
    });
  })
  .catch(() => {
    console.log("connectionn failed");
  });
