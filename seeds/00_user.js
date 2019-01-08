
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "users"; ALTER SEQUENCE users_id_seq RESTART WITH 2;')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'verz',
          password: '12345',
          avatar: 'http://avatarbox.net/avatars/img9/pokemon_face_avatar_picture_46051.jpg',
          email: 'verzetem@gmail.com'
        },
        {
          id: 2,
          username: 'soxxy',
          password: '12345',
          avatar: 'http://avatarbox.net/avatars/img9/pokemon_face_avatar_picture_46051.jpg',
          email: 'soxxy@gmail.com'
        },
        {
          id: 3,
          username: 'SuperCool',
          password: '12345',
          avatar: 'http://avatarbox.net/avatars/img9/pokemon_face_avatar_picture_46051.jpg',
          email: 'SuperCool@gmail.com'
        }
      ]);
    });
};
