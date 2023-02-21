const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.use('/contact', function(request, response) {
    response.render('contact', {
        title: 'Мои контакты',
        emailsVisible: true,
        emails: ['gavgav@mycorp.com', 'mioaw@mycorp.com'],
        phone: '+1234567890',
    })
})
app.use('/', function(request, response) {
    response.render('main', { title: 'Главная страница' })
})
app.use('/name', function(request, response) {
    response.render('name', { title: 'name' })
})
app.use('/about', function(request, response) {
    response.render('about', { title: 'about us' })
})
app.use('/skills', function(request, response) {
    response.render('skills', { title: 'skills' })
})
app.listen(3000)