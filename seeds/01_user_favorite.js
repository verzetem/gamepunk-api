
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "user_favorite"; ALTER SEQUENCE user_favorite_id_seq RESTART WITH 4;')
    .then(function () {
      // Inserts seed entries
      return knex('user_favorite').insert([
        {
          id: 1,
          favorite: 'https://www.ign.com/articles/2018/01/25/monster-hunter-world-review',
          user_id: 1
        },
        {
          id: 2,
          favorite: 'https://www.pcmag.com/review/351030/star-wars-the-old-republic-for-pc',
          user_id: 1
        },
        {
          id: 3,
          favorite: 'https://www.rockpapershotgun.com/2018/12/11/kenshi-review/',
          user_id: 1
        }
      ])
    })
}
