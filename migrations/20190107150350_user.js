
exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', function (table) {
	  table.increments()
	  table.string('username')
	  table.string('password')
	  table.string('avatar')
	  table.string('email')
	})  
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}
