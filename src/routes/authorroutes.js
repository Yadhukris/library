
// server for books page



const express = require('express');
const authorroutes = express.Router();






var authors = [
    {
        name: "William Shakespeare",
        language: "English",
        genre: 'Plays and poetry',
        img: '/images/shakespeare.jpg',
        desc: "William Shakespeare  was an English playwright, poet, and actor, widely regarded as the greatest writer in the English language and the world's greatest dramatist.He is often called England's national poet .His extant works, including collaborations, consist of some 39 plays, 154 sonnets, three long narrative poems, and a few other verses, some of uncertain authorship. His plays have been translated into every major living language and are performed more often than those of any other playwright. They also continue to be studied and reinterpreted"
    },
    {
        name: "Georges Simenon",
        language: "French",
        genre: 'Detectives',
        img: '/images/george.jpg',
        desc: "Georges Joseph Christian Simenon  was a Belgian writer. A prolific author who published nearly 500 novels and numerous short works, Simenon is best known as the creator of the fictional detective Jules Maigret."
    },
    {
        name: "Eiichiro Oda",
        language: "Japanese",
        genre: 'Manga',
        img: '/images/jap.jfif',
        desc: "Eiichiro Oda  is a Japanese manga artist and the creator of the series One Piece (1997–present). With more than 480 million tankōbon copies in circulation worldwide, One Piece is both the best-selling manga and the best-selling comic series of all time, in turn making Oda one of the best-selling fiction authors.The series' popularity resulted in Oda being named one of the manga artists that changed the history of manga."
    }
]

authorroutes.get('/', function (req, res) {
    res.render("authors",
        {

            nav: [{ link: '/books', name: 'books' }, { link: '/authors', name: 'authors' }, { link: '/login', name: 'login' }, { link: '/addbook', name: 'add new book' }, { link: '/addauthor', name: 'add new author' }],
            title: 'Authors',
            authors //books array  created abouve for books details
        }


    );

});


authorroutes.get('/:id', function (req, res) { //i value from url is acessed usimg /:i
    const id = req.params.id // acess i value from url and save it to id

    res.render("author",
        {

            nav: [{ link: '/books', name: 'books' }, { link: '/authors', name: 'authors' }, { link: '/login', name: 'login' }, { link: '/addbook', name: 'add new book' }, { link: '/addauthor', name: 'add new author' }],
            author: authors[id],//books array  created abouve for books details
            title: authors[id].name
        }


    ); 

});

module.exports = authorroutes; // now it can be acessed anywhere even in app.js