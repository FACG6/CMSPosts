require('dotenv').config();
const express = require('express');
const expresshbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const serveFav = require('serve-favicon');
const cookieParser = require('cookie-parser');
const controllers = require('./controllers/index');

const app = express();
app.set('port', process.env.PORT || 3300);
app.use(serveFav(path.join(__dirname, '..', 'public', 'post.ico')));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'hbs');
app.engine('hbs', expresshbs({
  extname: 'hbs',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials'),
  defaultLayout: 'main',
}));
app.use(controllers);
module.exports = app;
