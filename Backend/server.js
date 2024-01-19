const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const router = require("./Routes/route.js");
const pool = require("./Database/connectDb.js");

pool;

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use (bodyParser.json());

app.use('/', router);
const port = 7000;
app.listen(port, ()=>{
    console.log(`Listening to port ${port}`);
})