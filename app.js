const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;



//handlersBar
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');



//servir contenido estatico

app.use(express.static('public'));


app.listen(port)  