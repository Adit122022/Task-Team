const express = require('express')
const app = express()
 const indexRoutes = require('./routes/index.routes')
 const path=require('path')

 app.set('view engine', 'ejs');
 app.set('views', path.join(__dirname, 'views'));
 app.use(express.urlencoded({ extended: true }));
app.use('/', indexRoutes)  
module.exports = app;