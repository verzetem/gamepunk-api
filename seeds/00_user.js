
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq RESTART WITH 2;')
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {
          id: 1,
          username: 'verz',
          password: '12345',
          avatar: 'http://avatarbox.net/avatars/img9/pokemon_face_avatar_picture_46051.jpg',
          email: 'verzetem@gmail.com'
        }
      ]);
    });
};
