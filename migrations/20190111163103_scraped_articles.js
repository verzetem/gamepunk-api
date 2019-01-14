
exports.up = function(knex, Promise) {
  return knex.schema.createTable('scraped_article', function (table) {
	  table.increments()
	  table.string('article_url')
	  table.string('title')
	  table.string('img_url')
	  table.string('favorited')
	  table.string('publisher_id')
	})  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('scraped_article')
};
