const express = require('express');
const signuprouter = express.Router();

signuprouter.get('/', function (req, res) {
    res.render("signup",
        {

            nav: [{ link: '/books', name: 'books' }, { link: '/authors', name: 'authors' }, { link: '/login', name: 'login' }, { link: '/signup', name: 'signup' }, { link: '/addbook', name: 'add new book' }, { link: '/addauthor', name: 'add new author' }],
            
             login:'/login',
             title:"signup"
        }


    );

});

module.exports = signuprouter;