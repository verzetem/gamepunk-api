const express = require('express')
const router = express.Router()

const knex = require('../db/connection.js')
const usersQuery = require('../handlers/usersQuery')


router.get('/', (req, res, next) => {
  return usersQuery.list()
  	.orderBy('id', 'asc')
    .then(response => {
    	res.json({ users: response })
    })
})

router.get('/:id', (req, res, next) => {
  const id = req.params.id
  return usersQuery.list()
    .where('id', id)
    .then(response => {
    	response.length === 0 
    		? 
    		res.json({ error: "User not Found", url: req.originalUrl}) 
    		: 
    		res.json({ user: response[0] })
    })
  })


router.post('/', (req, res, next) => {
	const body = req.body
	return usersQuery.list()
		.insert(body)
		.returning('*')
		.then(response => {
			res.json({ user: response })
		})
	})

router.put('/:id', (req, res, next) => {
	const body = req.body
	const id = req.params.id
	return usersQuery.list()
		.where('id', id)
		.update(body)
		.returning('*')
		.then(response => {
			res.json({ user: response })
		})
	})

router.delete('/:id', (req, res, next) => {
	const id = req.params.id
	return usersQuery.list()
		.where('id', id)
		.del()
		.returning('*')
		.then(response => {
			res.json({ deleted: response })
		})
	})


module.exports = router