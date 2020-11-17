require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = process.env.NODE_SERVER_PORT
const databaseURL = process.env.DATABASE_URL

// SETUP ------
mongoose.connect(databaseURL, {useNewUrlParser: true, useUnifiedTopology: true});
var cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(cors())
app.use(cookieParser());

//Potential replacement for body-parser in newer versions of express: app.use(express.json());
app.use(bodyParser.json());

// ROUTING -----
var route = require("./src/routes/example")

//Index routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// ROUTES
app.use('/example', route);


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})