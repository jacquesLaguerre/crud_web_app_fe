const express = require('express');

const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

// dotenv = require('dotenv');
dotenv.config();
//To access configuration file when needed 

app.use(cors());
// Used to send data on the back end when I have an API call
app.use(express.json());
// In order to send data in json format 
app.use(express.urlencoded({extended : false }));

// create
// app.post('/insert', (request, response) => {

// });

// read
app.get('/getAll', (request, response) => {
  console.log('test');

});
// update

// delete


app.listen(process.env.PORT, () => console.log('app is running'))