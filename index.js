const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/atw", 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', function(){
    console.log('koneksi error')
})
db.once('open', function(){
    console.log('koneksi berhasil')
})

const express = require('express')
const userRouter = require('./router/users')
const { request } = require('express')

const app = express()


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var myLogger = function (request, response, next) {
    console.log('LOGGED')
    next()
}

app.use(myLogger)

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', function(require, response){
    const kelas = {
        id: 1,
        nama: 'bulan',
    }
    response.render('user/index', {kelas: kelas})
    
})
app.get('/about', function(req, res){
    res.render('about')
});

app.use(userRouter)

app.listen(8000, function(){
    console.log('server terbuka di port 8000')
});
