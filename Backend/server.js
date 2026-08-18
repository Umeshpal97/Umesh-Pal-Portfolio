const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

const Contact = require("./models/contact");

dotenv.config();

const app = express();
app.use(express.static(path.join(__dirname, "../Frontend")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/index.html"));
});


app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("MongoDB Error:", err);
  });

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      message
    });

    await newContact.save();

    res.status(201).json({
      success: true,
      message: "Message sent successfully"
    });
  } catch (error) {
    console.error("Contact Error:", error);

    if(error.name === "ValidationError") {
      const errors = Object.values(error.errors).map(
        (err) => err.message
      );

      return res.status(400).json({
        success: false,
        message: errors.join(", ")
      });
    }

    return res.status(500).json({
      success: false,
      message: "Something went wrong on the server."
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
