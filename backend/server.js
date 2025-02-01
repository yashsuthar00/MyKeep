const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');
const dbConnect = require('./config/dbConnection');

dbConnect();

const app = express();
app.use(cors());
PORT = process.env.PORT || 5001;

app.use("/api/dailytask", require("./routes/dailyTaskRoutes"));
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});