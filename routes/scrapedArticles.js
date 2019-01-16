const express = require('express')
const router = express.Router()
const scraper = require('../scraper/scraper')
const util = require('util')
const scrapeIt = util.promisify(scraper)

const knex = require('../db/connection.js')
const scrapedArticlesQuery = require('../handlers/scrapedArticlesQuery')

router.get('/', (req, res, next) => {
	return scrapedArticlesQuery.list()
  	.orderBy('id', 'asc')
    .then(response => {
			res.json({ articles: response })
    })
})

router.get('/update', (req, res, next) => {
	scraper();
	res.json({message: 'scraping initiated...'})
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
	const chunkSize = req.body.length
	const urls = body.map(article => {
		return article.article_url
	})
	const requests = body.map(article => {
		return knex('scraped_article')
		.where('article_url', article.article_url)
		.then(response => {
			if (!response.length) {
				return knex('scraped_article')
					.insert(article)
					.returning('*')
					.then(response => response)
			} else {
				return 'Already exists in DB'
			}
		})
		.then(article => {
			return article
		})
	})
	Promise.all(requests)
		.then(response => {
			res.json(response)
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