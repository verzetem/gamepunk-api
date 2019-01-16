
exports.up = function(knex, Promise) {
  return knex.schema.createTable('scraped_article', function (table) {
	  table.increments()
	  table.string('article_url').notNullable()
	  table.string('title').notNullable()
	  table.string('img_url').notNullable()
	  table.string('favorited').notNullable()
	  table.string('date_time').notNullable()
	  table.string('publisher_id')
	})  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('scraped_article')
};
