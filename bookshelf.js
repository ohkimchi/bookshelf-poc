var knex = require('knex')(require('./knexfile'));

var bookshelf = require('bookshlef')(knex);

module.exports = bookshelf;
