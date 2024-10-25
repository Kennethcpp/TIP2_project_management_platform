const express = require("express");
const connectToDatabase = require("./configuration/DB")
const Users = require("./models/userModel");
const dotenv = require("dotenv").config();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendUserEmail = require("./sendEmail");
const cors = require("cors");
const morgan = require("morgan");


const projectPlatform = express();

projectPlatform.use(express.json());
projectPlatform.use(cors());
projectPlatform.use(morgan("combined"));

const PORT = process.env.PORT || 9000;

// ConnectTo DATABASE

connectToDatabase();

projectPlatform.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});