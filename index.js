const express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    homeRouter = require('./routes/home'),
    filmsRouter = require('./routes/films'),
    tasksRouter = require('./routes/tasks');
const fs = require('fs');

const app = express(),
    server = require('http').createServer(app),
    io = require('socket.io')(server);

app.set('view engine', 'ejs');

app.use((request, response, next) => {

    request.io = io

    request.isFrench = () => {
        return (request.headers['accept-language'] && request.headers['accept-language'].includes('fr'))
    }

    next()

})

app.use(session({
    secret: 'aziheoaiheoanoadoaq azdak',
    cookie: {}
}))

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}))

app.use(homeRouter)
app.use(filmsRouter)
app.use(tasksRouter)

app.get('/404', (request, response) => {
    response.render('errors/404')
})

server.listen(3000);