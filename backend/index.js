const express = require("express");
const mongoose = require("mongoose");
const Invoice = require("./model/invoice.model.js");
const invoiceRoute = require("./router/invoice.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/invoices", invoiceRoute);




app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});


mongoose
  .connect(
    "mongodb+srv://upendranayanajithup:20001019@invoiceapp.cx2a8lc.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
