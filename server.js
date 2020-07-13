//2.2 bring in dependencies
const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');

//2.10 
const items = require ('./routes/api/items'); 

const app = express ();

//2.3bodyparser middleware
app.use(bodyParser.json());

//2.4 bring in keys file
const db = require ('./config/keys').mongoURI;

//2.5 connect to mongo with mongoose
mongoose.connect (db)
    .then(()=>console.log('mongoDB connected'))
    .catch(err=>console.log(err));

//2.10 use routes
app.use('/api/items', items);

//2.6 establish port connection
const PORT = process.env.PORT || 5000;
app.listen (PORT, ()=> console.log(`server started on on port ${PORT}`));