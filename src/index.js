const express = require('express');
const cors = require('cors');
const knex = require('./database')
const routes = require("./routes");
const multer = require('multer');
const port = process.env.PORT || 3333;

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes)

// catch all
/*app.use((error, req, res, next) =>{
  res.status(error.status || 500) 
  res.json({ error: error.message})
})*/

app.listen(port, () => { 
  console.log('Server listening on port: ' + port);
})


