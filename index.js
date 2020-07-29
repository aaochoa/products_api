const express = require('express')
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const productsRoute = require('./routes/products');

dotenv.config();

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('Connected to db'));

app.use(express.json());

app.use('/api/user', authRoute);
app.use('/api/products', productsRoute);

app.listen(3000, () => console.log('Server up and running'))