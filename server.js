const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');

const authRouter = require('./routes/auth');
const accountRouter = require('./routes/account')
require("dotenv").config();


const DBURL = process.env.DBURL;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', authRouter)
app.use('/account',accountRouter)

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect('mongodb+srv://hacknyu:XcTcnhyeKX5PP6b0@meta.mkvgfml.mongodb.net/?retryWrites=true&w=majority', connectionParams)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(`${err}`);
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('hello world')
})


app.listen(process.env.PORT || 4000, () => console.log(`Started server`));
