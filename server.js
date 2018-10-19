const express = require('express');
const ejs = require('ejs');
const app = express();
const knex = require('./models/knex.js');
const bodyParser = require('body-parser');
const user = require('./routes/user.js');
const post = require('./routes/post.js');
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    knex.select().from('posts').orderBy('created_date', 'desc').then((data) => {
        res.render('home', {posts: data})
    })
});

app.post('/', (req,response) => {
    // } else{
        knex('users').where({username: req.body.name.toLowerCase()}).then(res => {
            // Checking if the user already exists in the database, if he doesn't - add him.
            if(res.length === 0){
                return knex('users').insert({username: req.body.name.toLowerCase()})
                .then(() => {
                    return knex('posts').insert({posted_by: req.body.name.toLowerCase(), post: req.body.post, created_date: new Date()});
                })
                .then(() => {
                    console.log(`Sucesfully added new post on ${new Date()} by ${req.body.name}`);
                    response.redirect('/');
                })
                .catch(e => console.log(e))
            } else{
                return knex('posts').insert({posted_by: req.body.name.toLowerCase(), post: req.body.post, created_date: new Date()})
                .then(() => {
                    console.log(`Sucesfully added new post on ${new Date()} by ${req.body.name}`);
                    response.redirect('/');
                })
                .catch(e => console.log(e));
        } 
        })

});


app.use('/user', user);

app.use('/post', post)


app.listen(port, () => {
    console.log(`Started server on port ${port}`)
})