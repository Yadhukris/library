const express = require('express');
const loginrouter = express.Router();

loginrouter.get('/', function (req, res) {
    res.render("login",
        {

            nav: [{ link: '/books', name: 'books' }, { link: '/authors', name: 'authors' }, { link: '/login', name: 'login' }, { link: '/addbook', name: 'add new book' }, { link: '/addauthor', name: 'add new author' }],
            
             signup: '/signup',
             title:"Login"
        }


    );

});

// credentialsrouter.get('/', function (req, res) {
//     res.render("signup",
//         {

//             nav: [{ link: '/books', name: 'books' }, { link: '/authors', name: 'authors' }, { link: '/login', name: 'login' }, { link: '/add new book', name: 'add new book' }, { link: '/addauthor', name: 'add new author' }],
            
//              signup:'/login',
//              title:"signup"
//         }


//     );

// });

module.exports = loginrouter;