const express = require('express')
const router = express.Router()

const knex = require('../db/connection.js')
const scrapedArticlesQuery = require('../handlers/scrapedArticlesQuery')

router.get('/', (req, res, next) => {
	return scrapedArticlesQuery.list()
  	.orderBy('id', 'asc')
    .then(response => {
			res.json({ favorites: response })
    })
})

router.get('/:id', (req, res, next) => {
  const id = req.params.id
  return scrapedArticlesQuery.list()
    .where('id', id)
    .then(response => {
    	response.length === 0 
    		? 
    		res.json({ error: "Favorite not Found", url: req.originalUrl}) 
    		: 
    		res.json({ favorite: response[0] })
    })
  })


router.post('/', (req, res, next) => {
	const body = req.body
	return scrapedArticlesQuery.list()
		.insert(body)
		.returning('*')
		.then(response => {
			res.json({ favorite: response })
		})
	})

router.put('/:id', (req, res, next) => {
	const body = req.body
	const id = req.params.id
	return scrapedArticlesQuery.list()
		.where('id', id)
		.update(body)
		.returning('*')
		.then(response => {
			res.json({ favorite: response })
		})
	})

router.delete('/:id', (req, res, next) => {
	const id = req.params.id
	return scrapedArticlesQuery.list()
		.where('id', id)
		.del()
		.returning('*')
		.then(response => {
			res.json({ deleted: response })
		})
	})


module.exports = router