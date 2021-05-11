const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();

app.use(express.json())
const db = config.get('mongoURI');
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Database is connected...'))
    .catch(err => console.log('Database connection error : ' + err))

const port = process.env.PORT || 5000;

app.use('/api/users', require('./routes/api/user'))
app.listen(port, () => {
    console.log(`Server Running at http://localhost:${port}`)
})