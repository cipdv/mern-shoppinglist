//2.2 bring in dependencies
const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');

const app = express ();

//2.3bodyparser middleware
app.use(bodyParser.json());

