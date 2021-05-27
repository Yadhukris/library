const express = require('express');
const newbookroutes = express.Router();

newbookroutes.get('/', function (req, res) {
    res.render("addbook",
        {

            nav: [{ link: '/books', name: 'books' }, { link: '/authors', name: 'authors' }, { link: '/login', name: 'login' }, { link: '/addbook', name: 'addbook' }, { link: '/addauthor', name: 'add new author' }],
            
             login:'/login',
             title:"signup"
        }


    );

});

module.exports = newbookroutes;