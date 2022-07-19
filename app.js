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

app.get('/', function (req, res) {
  res.render('home', {
    nombre: 'Xavier Anchapaxi',
    titulo: 'Curso de node'
  })
})

app.get('/generic', function (req, res) {
    res.render('generic',{
    nombre: 'Xavier Anchapaxi',
    titulo: 'Curso de node'
    })
  })
app.get('/elements', function (req, res) {
  res.render('elements',{
    nombre: 'Xavier Anchapaxi',
    titulo: 'Curso de node'
    })
  })
app.get('*', function (req, res) {
    res.send('404 | Page not found')
  })

app.listen(port)