const express = require('express');
const mongoose = require('mongoose');
const passport= require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const authRoutes = require('./routes/auth');
const usersRoutes = require('./routes/users');
const univRoutes = require('./routes/universities');
const app = express();

mongoose.connect (
    `${require('./ENV').mongoUri}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    },
);

const dbConnection = mongoose.connection;
dbConnection.on('error', err => console.log(`Connection error ${err}`));
dbConnection.once('open', () => console.log('Connected to db'));


require('./middleware/passportMiddleware')(passport);

app.use(passport.initialize())
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/users', usersRoutes);
app.use('/universities', univRoutes);

module.exports = app;
