const express = require('express')
const app = express()
const cors = require('cors');
require('dotenv').config()
const port = process.env.SERVER_PORT
const router = require('./views/view');
require('./connection');
require('./models/accounts');
require('./models/transactions');

app.use(express.json());
app.use(cors());
app.use('/api',router);


app.listen(port, () => {
   console.log(`Server is running on http://localhost:${port}`);
 });