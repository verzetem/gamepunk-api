
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "scraped_article"; ALTER SEQUENCE scraped_article_id_seq RESTART WITH 37;')
    .then(function () {
      // Inserts seed entries
      return knex('scraped_article').insert([
        { 
          id: 1,
          article_url: 'https://www.gamespot.com/articles/mortal-kombat-11-gameplay-reveal-and-more-next-wee/1100-6464371/',
          title: 'Mortal Kombat 11 Gameplay Reve...',
          img_url: 'https://static.gamespot.com/uploads/screen_petite/1179/11799911/3487080-screen+shot+2019-01-14+at+2.29.51+pm.png',
          favorited: false,
          publisher_id: 1 
        },
        { 
          id: 2,
          article_url: 'https://www.gamespot.com/articles/black-ops-4s-next-update-outlined/1100-6464364/',
          title: 'Black Ops 4\'s Next Update Outl...',
          img_url: 'https://static.gamespot.com/uploads/screen_petite/1578/15787979/3486768-3538231102-34411.jpg',
          favorited: false,
          publisher_id: 1 
        },
        { 
          id: 3,
          article_url: 'https://www.gamespot.com/articles/the-epic-games-store-has-changed-its-refund-policy/1100-6464362/',
          title: 'The Epic Games Store Has Chang...',
          img_url: 'https://static.gamespot.com/uploads/screen_petite/1587/15875866/3486760-epic.jpg',
          favorited: false,
          publisher_id: 1 
        },
        { 
          id: 4,
          article_url: 'https://www.gamespot.com/articles/monster-hunter-world-anniversary-event-starts-soon/1100-6464351/',
          title: 'Monster Hunter World Anniversa...',
          img_url: 'https://static.gamespot.com/uploads/screen_petite/1578/15787979/3486555-3414747154-main..jpg',
          favorited: false,
          publisher_id: 1 
        },
        { 
          id: 5,
          article_url: 'https://www.gamespot.com/articles/destiny-2-where-is-xur-location-and-exotic-items-g/1100-6464353/',
          title: 'Destiny 2: Where Is Xur? Locat...',
          img_url: 'https://static.gamespot.com/uploads/screen_petite/123/1239113/3486561-8200483055-33422.jpg',
          favorited: false,
          publisher_id: 1 
        },
        { 
          id: 6,
          article_url: 'https://www.gamespot.com/videos/new-fallout-76-patch-has-over-150-bug-fixes-gs-new/2300-6447888/',
          title: 'New Fallout 76 Patch Has Over ...',
          img_url: 'https://static.gamespot.com/uploads/screen_petite/1563/15636435/3486306-fo+site.jpg',
          favorited: false,
          publisher_id: 1 
        },
        { 
          id: 7,
          article_url: 'https://www.gamespot.com/reviews/the-eternal-castle-remastered-review-vivid-flashba/1900-6417062/',
          title: 'The Eternal Castle Remastered ...',
          img_url: 'https://static.gamespot.com/uploads/screen_petite/172/1720905/3485970-review_theeternalcastle.jpg',
          favorited: false,
          publisher_id: 1 
        },
        { 
          id: 8,
          article_url: 'https://www.gamespot.com/videos/the-division-2-ditches-steam-for-the-epic-games-st/2300-6447877/',
          title: 'The Division 2 Ditches Steam F...',
          img_url: 'https://static.gamespot.com/uploads/screen_petite/1563/15636435/3485926-div+site.jpg',
          favorited: false,
          publisher_id: 1 
        },
        { 
          id: 9,
          article_url: 'https://www.gamespot.com/videos/yes-you-can-pause-sekiro-shadows-die-twice-gs-news/2300-6447869/',
          title: 'Yes, You Can Pause Sekiro: Sha...',
          img_url: 'https://static.gamespot.com/uploads/screen_petite/1563/15636435/3485743-sekiro+site.jpg',
          favorited: false,
          publisher_id: 1 
        },
        { 
          id: 10,
          article_url: 'https://www.gamespot.com/videos/all-the-htc-vive-announcements-from-ces-2019-gs-ne/2300-6447868/',
          title: 'All The HTC Vive Announcements...',
          img_url: 'https://static.gamespot.com/uploads/screen_petite/1563/15636435/3485563-vive+site.jpg',
          favorited: false,
          publisher_id: 1 
        },
        { 
          id: 11,
          article_url: 'https://www.gamespot.com/videos/fortnite-update-adds-suppressed-sniper-rifle-and-m/2300-6447867/',
          title: 'Fortnite Update Adds Suppresse...',
          img_url: 'https://static.gamespot.com/uploads/screen_petite/1563/15636435/3485457-fort+site.jpg',
          favorited: false,
          publisher_id: 1 
        },
        { 
          id: 12,
          article_url: 'https://www.gamespot.com/reviews/below-review-deep-down/1900-6417059/',
          title: 'Below Review - Deep Down\n\nBelo...',
          img_url: 'https://static.gamespot.com/uploads/screen_petite/172/1720905/3483023-3868056134-8aacb1a27929fa5a6923d0085684b482',
          favorited: false,
          publisher_id: 1 
        },
        { 
          id: 13,
          article_url: 'https://www.gamespot.com/videos/fallout-76-getting-nuke-code-fix-and-player-vendin/2300-6447830/',
          title: 'Fallout 76 Getting Nuke Code F...',
          img_url: 'https://static.gamespot.com/uploads/screen_petite/1563/15636435/3482938-fallout+site.jpg',
          favorited: false,
          publisher_id: 1 
        },
        { 
          id: 14,
          article_url: 'https://www.gamespot.com/reviews/gris-review-seeing-in-color/1900-6417057/',
          title: 'Gris Review - Seeing In Color\n...',
          img_url: 'https://static.gamespot.com/uploads/screen_petite/1575/15759911/3474576-gris-review-thumb-nologo.jpg',
          favorited: false,
          publisher_id: 1 
        },
        { 
          id: 15,
          article_url: 'https://www.gamespot.com/reviews/desert-child-review-burning-fuel/1900-6417056/',
          title: 'Desert Child Review - Burning ...',
          img_url: 'https://static.gamespot.com/uploads/screen_petite/172/1720905/3474040-desert-child-review-thumb-nologo.jpg',
          favorited: false,
          publisher_id: 1 
        },
        { 
          id: 16,
          article_url: 'https://www.gamespot.com/reviews/monster-boy-and-the-cursed-kingdom-review-fit-for-/1900-6417055/',
          title: 'Monster Boy And The Cursed Kin...',
          img_url: 'https://static.gamespot.com/uploads/screen_petite/172/1720905/3474035-review_monsterboy.jpg',
          favorited: false,
          publisher_id: 1 
        },
        { 
          id: 17,
          article_url: 'https://www.gamespot.com/reviews/ashen-review-relationship-souls/1900-6417053/',
          title: 'Ashen Review - Relationship So...',
          img_url: 'https://static.gamespot.com/uploads/screen_petite/1575/15759911/3472058-ashen-review-thumb-nologo.jpg',
          favorited: false,
          publisher_id: 1 
        }, 
        { 
          id: 18,
          article_url: 'https://kotaku.com/new-super-mario-bros-u-deluxe-the-kotaku-review-1831680503',
          title: 'New Super Mario Bros. U Deluxe...',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/wonz3mdpr7ivppydy2r1.jpg',
          favorited: false,
          publisher_id: 2 
        },
        { 
          id: 19,
          article_url: 'https://kotaku.com/super-smash-bros-ultimate-the-kotaku-review-1830891333',
          title: 'Super Smash Bros. Ultimate: Th...',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/vmnjkru7ddujnwuthbqu.jpg',
          favorited: false,
          publisher_id: 2 
        },
        { 
          id: 20,
          article_url: 'https://kotaku.com/monster-boy-and-the-cursed-kingdom-the-kotaku-review-1830850235',
          title: 'Monster Boy And The Cursed Kin...',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/k1osdvsnshtt0svbmeza.jpg',
          favorited: false,
          publisher_id: 2 
        },
        { 
          id: 21,
          article_url: 'https://kotaku.com/fallout-76-the-kotaku-review-1830719817',
          title: 'Fallout 76: The Kotaku Review...',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/hjpmuquq7mptd3hkxen8.jpg',
          favorited: false,
          publisher_id: 2 
        },
        { 
          id: 22,
          article_url: 'https://kotaku.com/battlefield-v-the-kotaku-review-1830469347',
          title: 'Battlefield V: The Kotaku Revi...',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/tbzm8lhtjtyrxsgi6dq4.jpg',
          favorited: false,
          publisher_id: 2 
        },
        { 
          id: 23,
          article_url: 'https://kotaku.com/pokemon-lets-go-eevee-and-pikachu-the-kotaku-review-1830393778',
          title: 'Pokémon Let\'s Go! Eevee and Pi...',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/dutytksdvids9n9fgkw8.jpg',
          favorited: false,
          publisher_id: 2 
        },
        { 
          id: 24,
          article_url: 'https://kotaku.com/hitman-2-the-kotaku-review-1830317433',
          title: 'Hitman 2: The Kotaku Review...',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/os6bs7fgvzepeyrgpb07.jpg',
          favorited: false,
          publisher_id: 2 
        },
        { 
          id: 25,
          article_url: 'https://kotaku.com/tetris-effect-the-kotaku-review-1830325513',
          title: 'Tetris Effect: The Kotaku Revi...',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/bzu39f85lyptvxrkhygp.jpg',
          favorited: false,
          publisher_id: 2 
        },
        { 
          id: 26,
          article_url: 'https://kotaku.com/starlink-battle-for-atlas-the-kotaku-review-1830020654',
          title: 'Starlink: Battle For Atlas: Th...',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/xblq7irbijrhpdayenhz.jpg',
          favorited: false,
          publisher_id: 2 
        },
        { 
          id: 27,
          article_url: 'https://kotaku.com/red-dead-redemption-2-the-kotaku-review-1829984369',
          title: 'Red Dead Redemption 2: The Kot...',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/jwrfxoi59ldokoqlbfbe.jpg',
          favorited: false,
          publisher_id: 2 
        },
        {id: 28,
          article_url: 'https://kotaku.com/return-of-the-obra-dinn-the-kotaku-review-1829797772',
          title: 'Return of the Obra Dinn: The K...',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/btmrdokhb46ci8xfhigt.jpg',
          favorited: false,
          publisher_id: 2 
        },
        { 
          id: 29,
          article_url: 'https://kotaku.com/call-of-duty-black-ops-4-the-kotaku-review-1829761577',
          title: 'Call of Duty: Black Ops 4: The...',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/izrnnqqfrr10u8w46s0p.jpg',
          favorited: false,
          publisher_id: 2 
        },
        { 
          id: 30,
          article_url: 'https://kotaku.com/the-world-ends-with-you-final-remix-the-kotaku-review-1829697381',
          title: 'The World Ends With You: Final...',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/pydwm37vw62ti5jfvac6.jpg',
          favorited: false,
          publisher_id: 2 
        },
        { 
          id: 31,
          article_url: 'https://kotaku.com/super-mario-party-the-kotaku-review-1829480351',
          title: 'Super Mario Party: The Kotaku ...',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/m5fynm5uiyyv3s9fh2b4.jpg',
          favorited: false,
          publisher_id: 2 
        },
        { 
          id: 32,
          article_url: 'https://kotaku.com/assassin-s-creed-odyssey-the-kotaku-review-1829425897',
          title: 'Assassin’s Creed Odyssey: The ...',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/hlkxkmbj2fqrvmdd1pqf.jpg',
          favorited: false,
          publisher_id: 2 
        },
        { id: 33,
          article_url: 'https://kotaku.com/mega-man-11-the-kotaku-review-1829453857',
          title: 'Mega Man 11: The Kotaku Review...',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/akrrvbo8gxqxvi1kqjxr.jpg',
          favorited: false,
          publisher_id: 2 
        },
        { 
          id: 34,
          article_url: 'https://kotaku.com/dragon-ball-fighterz-the-kotaku-review-1822541455',
          title: 'Dragon Ball FighterZ: The Kota...',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/kcfjmh7lfx0rr60ko6lw.jpg',
          favorited: false,
          publisher_id: 2 
        },
        { 
          id: 35,
          article_url: 'https://kotaku.com/valkyria-chronicles-4-the-kotaku-review-1828945440',
          title: 'Valkyria Chronicles 4: The Kot...',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/fhievbkucvwmuuriihl4.jpg',
          favorited: false,
          publisher_id: 2 
        },
        { 
          id: 36,
          article_url: 'https://kotaku.com/destiny-2-forsaken-the-kotaku-review-1829226372',
          title: 'Destiny 2: Forsaken: The Kotak...',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/ztnoeqjju3lgvs4myoez.jpg',
          favorited: false,
          publisher_id: 2 
        },
        { 
          id: 37,
          article_url: 'https://kotaku.com/shadow-of-the-tomb-raider-the-kotaku-review-1828924874',
          title: 'Shadow of the Tomb Raider: The...',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/chepwtjnsd4yzczvvxty.jpg',
          favorited: false,
          publisher_id: 2 
        }
      ])
    })
}
