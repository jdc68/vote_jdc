const express = require('express')
const app = express()

app.set('view-engine', 'ejs');
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('index.ejs', {voted: false})
})

app.get('/voted', (req, res) => {
    res.render('voted.ejs', {voted: true})
})


app.listen(5000)