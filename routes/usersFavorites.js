const express = require('express')
const router = express.Router()

const knex = require('../db/connection.js')

router.get('/', (req, res, next) => {
  knex('user_favorite')
  	.orderBy('id', 'asc')
    .then(resp => res.json(resp))
})

router.get('/:id', (req, res, next) => {
  const id = req.params.id
  knex('user_favorite')
    .where('id', id)
    .then(response => {
      res.json({ favorite: response[0] })
    })
  })


router.post('/', (req, res, next) => {
	const body = req.body
	knex('user_favorite')
		.insert(body)
		.then(response => {
			res.json({ favorite: response })
		})
	})

router.put('/:id', (req, res, next) => {
	const body = req.body
	const id = req.params.id
	knex('user_favorite')
		.where('id', id)
		.update(body)
		.returning('*')
		.then(response => {
			res.json({ favorite: response })
		})
	})

router.delete('/:id', (req, res, next) => {
	const id = req.params.id
	knex('user_favorite')
		.where('id', id)
		.del()
		.returning('*')
		.then(response => {
			res.json({ deleted: response })
		})
	})


module.exports = router