const express = require('express'); 

const app = express(); 

const port = process.env.PORT || 3003;

const booksrouter= require('./src/routes/bookroutes')
const authorroutes= require('./src/routes/authorroutes')
const loginrouter= require('./src/routes/loginrouter')
const signuprouter= require('./src/routes/signuprouter')
const newbookroutes= require('./src/routes/newbookroutes')
const newauthorroutes= require('./src/routes/newauthorroutes')



app.set('view engine', 'ejs'); 
app.set('views', __dirname + '/src/views')
app.use(express.static('./public')); 


app.use('/books', booksrouter); 
app.use('/authors', authorroutes);
app.use('/login', loginrouter);
app.use('/signup', signuprouter);
app.use('/addbook', newbookroutes);
app.use('/addauthor', newauthorroutes);

app.get('/', function (req, res) {
    res.render("index", 
        {

            nav: [{ link: '/books', name: 'books' }, { link: '/authors', name: 'authors' }, { link: '/login', name: 'login' },{ link: '/addbook', name: 'add new book' },{ link: '/addauthor', name: 'add new author' }],
            title: 'Library'
        }


    ); 

});







app.listen(port,
    ()=> {console.log ("server ready at " + port)}
          );