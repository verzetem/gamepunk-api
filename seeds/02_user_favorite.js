exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "user_favorite"; ALTER SEQUENCE user_favorite_id_seq RESTART WITH 5;')
    .then(function () {
      // Inserts seed entries
      return knex('user_favorite').insert([
        {
          id: 1, 
          users_id: 1,
          favorites_id: 1 
        },
        {
          id: 2, 
          users_id: 2,
          favorites_id: 2 
        },
        {
          id: 3, 
          users_id: 3,
          favorites_id: 3 
        },
        {
          id: 4, 
          users_id: 1,
          favorites_id: 4
        }
      ])
    })
}

