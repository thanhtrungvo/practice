const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const errorControler = require('./controlers/error')
const generalROutes = require('./routes/general')
const authRoutes = require('./routes/auth')

app.use(bodyParser.urlencoded({extended: false})) 

app.use(express.static(path.join(__dirname, 'public'))); // this mean all the file in public can be access by client

app.set('view engine', 'ejs')       // template engine: ejs, 
app.set('views', 'views')           // Khi render => tim kiem trong folder views

//app.use('/admin',adminRoutes);

app.use('/auth',authRoutes);

app.use('/', generalROutes)

app.use(errorControler.get404)//=> app.use() middleware can get all the request from this host

app.listen(5678);