const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
const registerResearch = require("./routes/registerResearchRoutes")
const registerPracticum = require("./routes/registerPracticumRoutes")

let corsOptions = {
  origin: [
    "http://localhost:3000",
    "https://cpslaboratory.com",
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/register", registerResearch)
app.use("/register", registerPracticum)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  