const express = require('express')
const router = express.Router()

const knex = require('../db/connection.js')
const scrapedArticlesQuery = require('../handlers/scrapedArticlesQuery')

router.get('/', (req, res, next) => {
	return scrapedArticlesQuery.list()
  	.orderBy('id', 'asc')
    .then(response => {
			res.json({ articles: response })
    })
})

router.get('/:id', (req, res, next) => {
  const id = req.params.id
  return scrapedArticlesQuery.list()
    .where('id', id)
    .then(response => {
    	response.length === 0 
    		? 
    		res.json({ error: "Article not Found", url: req.originalUrl}) 
    		: 
    		res.json({ article: response[0] })
    })
  })


router.post('/', (req, res, next) => {
	const body = req.body
	return scrapedArticlesQuery.list()
		.insert(body)
		.returning('*')
		.then(response => {
			res.json({ article: response })
		})
	})

router.put('/:id', (req, res, next) => {
	const body = req.body
	const id = req.params.id
	return scrapedArticlesQuery.list()
		.where('id', id)
		.update(body)
		// .returning('*')
		.then(response => {
			res.json({ article: response })
		})
	})

router.delete('/:id', (req, res, next) => {
	const id = req.params.id
	return scrapedArticlesQuery.list()
		.where('id', id)
		.del()
		.returning('*')
		.then(response => {
			res.json({ deleted_article: response })
		})
	})


module.exports = router