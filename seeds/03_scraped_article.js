
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "scraped_article"; ALTER SEQUENCE scraped_article_id_seq RESTART WITH 38;')
    .then(function () {
      // Inserts seed entries
      return knex('scraped_article').insert([
      
      ])
    })
}
