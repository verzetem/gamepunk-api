const knex = require('../db/connection.js')

module.exports = {
	list() {
		return knex
			.select('*')
			.from('users')
			.innerJoin('user_favorite', 'users.id', 'user_favorite.users_id')
	}
}