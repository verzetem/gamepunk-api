const express = require('express')
const router = express.Router()

const knex = require('../db/connection.js')
const usersFavoritesQuery = require('../handlers/usersFavoritesQuery')

router.get('/', (req, res, next) => {
	return usersFavoritesQuery.list()
  	.orderBy('users.id', 'asc')
    .then(response => {
			res.json({ user_favorites: response })
    })
  })

router.get('/:id', (req, res, next) => {
  const id = req.params.id
  return usersFavoritesQuery.list()
    .where('users.id', id)
    .then(response => {
    	response.length === 0 
    		? 
    		res.json({ error: "Not Found", url: req.originalUrl}) 
    		: 
    		res.json({ user_favorites: response })
      })
  })


// router.post('/', (req, res, next) => {
// 	const body = req.body
// 	return favoritesQuery.list()
// 		.insert(body)
// 		.returning('*')
// 		.then(response => {
// 			res.json({ favorite: response })
// 		})
// 	})

// router.put('/:id', (req, res, next) => {
// 	const body = req.body
// 	const id = req.params.id
// 	return favoritesQuery.list()
// 		.where('id', id)
// 		.update(body)
// 		.returning('*')
// 		.then(response => {
// 			res.json({ favorite: response })
// 		})
// 	})

// router.delete('/:id', (req, res, next) => {
// 	const id = req.params.id
// 	return favoritesQuery.list()
// 		.where('id', id)
// 		.del()
// 		.returning('*')
// 		.then(response => {
// 			res.json({ deleted: response })
// 		})
// 	})


module.exports = router