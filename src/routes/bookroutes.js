
// server for books page



const express = require('express');
const booksrouter = express.Router();






var books = [
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J. K. Rowling",
        genre: 'Fantasy',
        img: '/images/harry.jpg',
        desc: "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J.K.Rowling.The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school, and with the help of his friends, he faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old."
    },
    {
        title: "The Little Prince",
        author: "Antoine de Saint-Exupéry",
        genre: 'Novella',
        img: '/images/princ.jpg',
        desc: "The Little Prince  is a novella by French aristocrat, writer, and aviator Antoine de Saint-Exupéry. It was first published in English and French in the US by Reynal & Hitchcock in April 1943, and posthumously in France following the liberation of France as Saint-Exupéry's works had been banned by the Vichy Regime. The story follows a young prince who visits various planets in space, including Earth, and addresses themes of loneliness, friendship, love, and loss. Despite its style as a children's book, The Little Prince makes observations about life and human nature"
    },
    {
        title: "Dream of the Red Chamber",
        author: "Cao Xueqin",
        genre: 'Family saga',
        img: '/images/hong.jpg',
        desc: "Dream of the Red Chamber, also called The Story of the Stone,  composed by Cao Xueqin, is one of China's Four Great Classical Novels. It was written some time in the middle of the 18th century during the Qing dynasty. Long considered a masterpiece of Chinese literature, the novel is generally acknowledged to be one of the pinnacles of Chinese fiction. "
    }
]

booksrouter.get('/', function (req, res) {
    res.render("books",
        {

            nav: [{ link: '/books', name: 'books' }, { link: '/authors', name: 'authors' }, { link: '/login', name: 'login' }, { link: '/signup', name: 'signup' }, { link: '/addbook', name: 'add new book' }, { link: '/addauthor', name: 'add new author' }],
            title: 'Books',
            books //books array  created abouve for books details
        }


    );

});


booksrouter.get('/:id', function (req, res) { //i value from url is acessed usimg /:i
    const id = req.params.id // acess i value from url and save it to id

    res.render("book",
        {

            nav: [{ link: '/books', name: 'books' }, { link: '/authors', name: 'authors' }, { link: '/login', name: 'login' }, { link: '/login', name: '/signup' }, { link: '/addbook', name: 'add new book' }, { link: '/addauthor', name: 'add new author' }],
            book: books[id],//books array  created abouve for books details
            title: books[id].title
        }


    ); //passing vales to ejs as an object

});

module.exports = booksrouter; // now it can be acessed anywhere even in app.js