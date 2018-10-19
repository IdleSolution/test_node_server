const express = require('express');
const router = express.Router();
const knex = require('./../models/knex.js');

router.delete('/delete/:id', (req, res) => {
    knex('posts').where({id: req.params.id}).del()
    .then((res) => console.log(`Sucesfully deleted post on ${new Date()} with id of ${req.params.id}`))
    .then(() => res.redirect('/'));
})


module.exports = router;