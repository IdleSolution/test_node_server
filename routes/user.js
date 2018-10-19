const express = require('express');
const router = express.Router();
const knex = require('./../models/knex.js');

router.get('/:username', (req, res) => {
    knex.from('posts').innerJoin('users', 'username', 'posted_by').where({username: req.params.username}).orderBy('created_date', 'desc').then(data => {
        res.render('user.ejs', {data: data});
    });
})


module.exports = router;
