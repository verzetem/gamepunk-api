const express = require('express')
const router = express.Router()

const knex = require('../db/connection.js')
const usersQuery = require('../handlers/usersQuery')


router.get('/', (req, res, next) => {
  return usersQuery.list()
  	.orderBy('id', 'asc')
    .then(resp => res.json(resp))
})

router.get('/:id', (req, res, next) => {
  const id = req.params.id
  return usersQuery.list()
    .where('id', id)
    .then(response => res.json(response[0]))
  })


router.post('/', (req, res, next) => {
	const body = req.body
	knex('users')
		.insert(body)
		.then(response => {
			res.json({ user: response })
		})
	})

router.put('/:id', (req, res, next) => {
	const body = req.body
	const id = req.params.id
	knex('users')
		.where('id', id)
		.update(body)
		.returning('*')
		.then(response => {
			res.json({ user: response })
		})
	})

router.delete('/:id', (req, res, next) => {
	const id = req.params.id
	knex('users')
		.where('id', id)
		.del()
		.returning('*')
		.then(response => {
			res.json({ deleted: response })
		})
	})


module.exports = router