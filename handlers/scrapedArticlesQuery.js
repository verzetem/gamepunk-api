const knex = require('../db/connection.js')

module.exports = {
	list() {
		return knex('scraped_article')
	}
}