const express = require('express');
const newauthorroutes = express.Router();

newauthorroutes.get('/', function (req, res) {
    res.render("addauthor",
        {

            nav: [{ link: '/books', name: 'books' }, { link: '/authors', name: 'authors' }, { link: '/login', name: 'login' }, { link: '/addbook', name: 'addbook' }, { link: '/addauthor', name: 'add new author' }],
            
             login:'/login',
             title:"Add author"
        }


    );

});

module.exports = newauthorroutes;