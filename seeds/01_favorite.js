
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "favorites"; ALTER SEQUENCE favorites_id_seq RESTART WITH 4;')
    .then(function () {
      // Inserts seed entries
      return knex('favorites').insert([
        {
          id: 1,
          fav: 'https://www.ign.com/articles/2018/01/25/monster-hunter-world-review',
        },
        {
          id: 2,
          fav: 'https://www.pcmag.com/review/351030/star-wars-the-old-republic-for-pc',
        },
        {
          id: 3,
          fav: 'https://www.rockpapershotgun.com/2018/12/11/kenshi-review/',
        },
        {
          id: 4,
          fav: 'https://www.rockpapershotgun.com/2018/12/11/kenshi-review/',
        }
      ])
    })
}
