
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "scraped_article"; ALTER SEQUENCE scraped_article_id_seq RESTART WITH 37;')
    .then(function () {
      // Inserts seed entries
      return knex('scraped_article').insert([
        { 
          id: 1,
          article_url: 'https://www.gamespot.com/articles/monster-hunter-world-anniversary-event-starts-soon/1100-6464351/',
          title: 'Monster Hunter World Anniversary Event Starts Soon\n\nThe Appreciation Fest event begins on all platforms on January 26 and features new and returning event quests, as well as new seasonal gear and items to earn.\n\n4 hours, 49 minutes ago',
          img_url:'https://static.gamespot.com/uploads/screen_petite/1578/15787979/3486555-3414747154-main..jpg',
          publisher_id: 1 
        },
        { 
          id: 2,
          article_url: 'https://www.gamespot.com/articles/where-is-xur-today-destiny-2-xur-location-and-exot/1100-6464353/',
          title: 'Where Is Xur Today? Destiny 2 Xur Location And Exotic Items Guide (Jan. 11-15)\n\nHere\'s where to find Xur and what he\'s selling this weekend for players on PS4, Xbox One, and PC.\n\n7 hours, 2 minutes ago',
          img_url: 'https://static.gamespot.com/uploads/screen_petite/123/1239113/3486561-8200483055-33422.jpg',
          publisher_id: 1 
        },
        { 
          id: 3,
          article_url: 'https://www.gamespot.com/articles/massive-winter-sale-on-pc-games-is-live-on-humble/1100-6464350/',
          title: 'Massive Winter Sale On PC Games Is Live On Humble\n\nBulk up your Steam library with these PC game deals that drop prices on titles like Civ 6 and The Witcher 3 up to 90%.\n\n8 hours, 3 minutes ago',
          img_url: 'https://static.gamespot.com/uploads/screen_petite/1165/11653967/3486542-ss_63e2c44f2bb98fc0a996c7364c25e71541e9e8ed.1920x1080.jpg',
          publisher_id: 1 
        },
        { 
          id: 4,
          article_url: 'https://www.gamespot.com/articles/dead-or-alive-6-beta-given-surprise-release/1100-6464348/',
          title: 'Dead Or Alive 6 Beta Given Surprise Release\n\nDead or Alive 6\'s release date may have been delayed, but you can still play a beta very soon.\n\n11 hours, 19 minutes ago',
          img_url: 'https://static.gamespot.com/uploads/screen_petite/1556/15568848/3486522-7390434306-34567.jpg',
          publisher_id: 1 
        },
        { 
          id: 5,
          article_url: 'https://www.gamespot.com/videos/new-fallout-76-patch-has-over-150-bug-fixes-gs-new/2300-6447888/',
          title: 'New Fallout 76 Patch Has Over 150 Bug Fixes - GS News Update\n\nFallout 76\'s next big patch is here.\n\n1 day, 2 hours ago',
          img_url: 'https://static.gamespot.com/uploads/screen_petite/1563/15636435/3486306-fo+site.jpg',
          publisher_id: 1 
        },
        { 
          id: 6,
          article_url: 'https://www.gamespot.com/reviews/the-eternal-castle-remastered-review-vivid-flashba/1900-6417062/',
          title: 'The Eternal Castle Remastered Review - Vivid Flashbacks\n\nThe Eternal Castle Remastered is a stunning, evocative cinematic platformer that recalls a long-past era of PC gaming.\n\n1 day, 23 hours ago',
          img_url: 'https://static.gamespot.com/uploads/screen_petite/172/1720905/3485970-review_theeternalcastle.jpg',
          publisher_id: 1 
        },
        { 
          id: 7,
          article_url: 'https://www.gamespot.com/videos/the-division-2-ditches-steam-for-the-epic-games-st/2300-6447877/',
          title: 'The Division 2 Ditches Steam For The Epic Games Store - GS News Update\n\nNo Steam, but a wide range of supported hardware.\n\n2 days, 1 hour ago',
          img_url: 'https://static.gamespot.com/uploads/screen_petite/1563/15636435/3485926-div+site.jpg',
          publisher_id: 1 
        },
        { 
          id: 8,
          article_url: 'https://www.gamespot.com/videos/yes-you-can-pause-sekiro-shadows-die-twice-gs-news/2300-6447869/',
          title: 'Yes, You Can Pause Sekiro: Shadows Die Twice - GS News Update\n\nThank God.\n\n2 days, 6 hours ago',
          img_url: 'https://static.gamespot.com/uploads/screen_petite/1563/15636435/3485743-sekiro+site.jpg',
          publisher_id: 1 
        },
        { 
          id: 9,
          article_url: 'https://www.gamespot.com/videos/all-the-htc-vive-announcements-from-ces-2019-gs-ne/2300-6447868/',
          title: 'All The HTC Vive Announcements From CES 2019 - GS News Update\n\nHere\'s everything HTC showed off during its CES press conference.\n\n3 days, 14 minutes ago',
          img_url: 'https://static.gamespot.com/uploads/screen_petite/1563/15636435/3485563-vive+site.jpg',
          publisher_id: 1 
        },
        { 
          id: 10,
          article_url: 'https://www.gamespot.com/videos/fortnite-update-adds-suppressed-sniper-rifle-and-m/2300-6447867/',
          title: 'Fortnite Update Adds Suppressed Sniper Rifle And More - GS News Update\n\nSilent assassin.\n\n3 days, 2 hours ago',
          img_url: 'https://static.gamespot.com/uploads/screen_petite/1563/15636435/3485457-fort+site.jpg',
          publisher_id: 1 
        },
        { 
          id: 11,
          article_url: 'https://www.gamespot.com/reviews/below-review-deep-down/1900-6417059/',
          title: 'Below Review - Deep Down\n\nBelow\'s foreboding atmosphere and slow, purposeful pace works in its early stages, but numerous frustrating design choices make its back half a nightmare.\n\n8 days, 22 hours ago',
          img_url: 'https://static.gamespot.com/uploads/screen_petite/172/1720905/3483023-3868056134-8aacb1a27929fa5a6923d0085684b482',
          publisher_id: 1 
        },
        { 
          id: 12,
          article_url: 'https://www.gamespot.com/videos/fallout-76-getting-nuke-code-fix-and-player-vendin/2300-6447830/',
          title: 'Fallout 76 Getting Nuke Code Fix And Player Vending - GS News Update\n\nPsst. Want to buy some nuclear codes?\n\n9 days, 2 hours ago',
          img_url: 'https://static.gamespot.com/uploads/screen_petite/1563/15636435/3482938-fallout+site.jpg',
          publisher_id: 1 
        },
        { 
          id: 13,
          article_url: 'https://www.gamespot.com/reviews/gris-review-seeing-in-color/1900-6417057/',
          title: 'Gris Review - Seeing In Color\n\nGris is a beautiful and tranquil platformer that relishes in the simple pleasure of exploring its enchanting world.\n\n29 days, 9 hours ago',
          img_url: 'https://static.gamespot.com/uploads/screen_petite/1575/15759911/3474576-gris-review-thumb-nologo.jpg',
          publisher_id: 1 
        },
        { 
          id: 14,
          article_url: 'https://www.gamespot.com/reviews/desert-child-review-burning-fuel/1900-6417056/',
          title: 'Desert Child Review - Burning Fuel\n\nA low-fi hoverbike racer with oodles of charm and style, but not a lot under the hood.\n\n1 month, 7 hours ago',
          img_url: 'https://static.gamespot.com/uploads/screen_petite/172/1720905/3474040-desert-child-review-thumb-nologo.jpg',
          publisher_id: 1 
        },
        { 
          id: 15,
          article_url: 'https://www.gamespot.com/reviews/monster-boy-and-the-cursed-kingdom-review-fit-for-/1900-6417055/',
          title: 'Monster Boy And The Cursed Kingdom Review - Fit For A King\n\nMonster Boy and the Cursed Kingdom is a beautiful, challenging, and fantastic successor to the Wonder Boy series.\n\n1 month, 21 hours ago',
          img_url: 'https://static.gamespot.com/uploads/screen_petite/172/1720905/3474035-review_monsterboy.jpg',
          publisher_id: 1 
        },
        { 
          id: 16,
          article_url: 'https://www.gamespot.com/reviews/ashen-review-relationship-souls/1900-6417053/',
          title: 'Ashen Review - Relationship Souls\n\nA44\'s Ashen is as much about building community as it is defeating challenging enemies, reinforcing the triumph of victory with concrete examples of how you\'re improving its world.\n\n1 month, 4 days ago',
          img_url: 'https://static.gamespot.com/uploads/screen_petite/1575/15759911/3472058-ashen-review-thumb-nologo.jpg',
          publisher_id: 1 
        }, 
        { 
          id: 17,
          article_url: 'https://kotaku.com/new-super-mario-bros-u-deluxe-the-kotaku-review-1831680503',
          title: 'New Super Mario Bros. U Deluxe: The Kotaku Review',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/wonz3mdpr7ivppydy2r1.jpg',
          publisher_id: 2 
        },
        { 
          id: 18,
          article_url: 'https://kotaku.com/super-smash-bros-ultimate-the-kotaku-review-1830891333',
          title: 'Super Smash Bros. Ultimate: The Kotaku Review',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/vmnjkru7ddujnwuthbqu.jpg',
          publisher_id: 2 
        },
        { 
          id: 19,
          article_url: 'https://kotaku.com/monster-boy-and-the-cursed-kingdom-the-kotaku-review-1830850235',
          title: 'Monster Boy And The Cursed Kingdom: The Kotaku Review',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/k1osdvsnshtt0svbmeza.jpg',
          publisher_id: 2 
        },
        { 
          id: 20,
          article_url: 'https://kotaku.com/fallout-76-the-kotaku-review-1830719817',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/hjpmuquq7mptd3hkxen8.jpg',
          publisher_id: 2 
        },
        { 
          id: 21,
          article_url: 'https://kotaku.com/battlefield-v-the-kotaku-review-1830469347',
          title: 'Battlefield V: The Kotaku Review',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/tbzm8lhtjtyrxsgi6dq4.jpg',
          publisher_id: 2 
        },
        { 
          id: 22,
          article_url: 'https://kotaku.com/pokemon-lets-go-eevee-and-pikachu-the-kotaku-review-1830393778',
          title: 'Pokémon Let\'s Go! Eevee and Pikachu: The Kotaku Review',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/dutytksdvids9n9fgkw8.jpg',
          publisher_id: 2 
        },
        { 
          id: 23,
          article_url: 'https://kotaku.com/hitman-2-the-kotaku-review-1830317433',
          title: 'Hitman 2: The Kotaku Review',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/os6bs7fgvzepeyrgpb07.jpg',
          publisher_id: 2 
        },
        { 
          id: 24,
          article_url: 'https://kotaku.com/tetris-effect-the-kotaku-review-1830325513',
          title: 'Tetris Effect: The Kotaku Review',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/bzu39f85lyptvxrkhygp.jpg',
          publisher_id: 2 
        },
        { 
          id: 25,
          article_url: 'https://kotaku.com/starlink-battle-for-atlas-the-kotaku-review-1830020654',
          title: 'Starlink: Battle For Atlas: The Kotaku Review',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/xblq7irbijrhpdayenhz.jpg',
          publisher_id: 2 
        },
        { 
          id: 26,
          article_url: 'https://kotaku.com/red-dead-redemption-2-the-kotaku-review-1829984369',
          title: 'Red Dead Redemption 2: The Kotaku Review',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/jwrfxoi59ldokoqlbfbe.jpg',
          publisher_id: 2 
        },
        { 
          id: 27,
          article_url: 'https://kotaku.com/return-of-the-obra-dinn-the-kotaku-review-1829797772',
          title: 'Return of the Obra Dinn: The Kotaku Review',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/btmrdokhb46ci8xfhigt.jpg',
          publisher_id: 2 
        },
        { 
          id: 28,
          article_url: 'https://kotaku.com/call-of-duty-black-ops-4-the-kotaku-review-1829761577',
          title: 'Call of Duty: Black Ops 4: The Kotaku Review',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/izrnnqqfrr10u8w46s0p.jpg',
          publisher_id: 2 
        },
        { 
          id: 29,
          article_url: 'https://kotaku.com/the-world-ends-with-you-final-remix-the-kotaku-review-1829697381',
          title: 'The World Ends With You: Final Remix: The Kotaku Review',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/pydwm37vw62ti5jfvac6.jpg',
          publisher_id: 2 
        },
        { 
          id: 30,
          article_url: 'https://kotaku.com/super-mario-party-the-kotaku-review-1829480351',
          title: 'Super Mario Party: The Kotaku Review',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/m5fynm5uiyyv3s9fh2b4.jpg',
          publisher_id: 2 
        },
        { 
          id: 31,
          article_url: 'https://kotaku.com/assassin-s-creed-odyssey-the-kotaku-review-1829425897',
          title: 'Assassin’s Creed Odyssey: The Kotaku Review',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/hlkxkmbj2fqrvmdd1pqf.jpg',
          publisher_id: 2 
        },
        { 
          id: 32,
          article_url: 'https://kotaku.com/mega-man-11-the-kotaku-review-1829453857',
          title: 'Mega Man 11: The Kotaku Review',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/akrrvbo8gxqxvi1kqjxr.jpg',
          publisher_id: 2 
        },
        { 
          id: 33,
          article_url: 'https://kotaku.com/dragon-ball-fighterz-the-kotaku-review-1822541455',
          title: 'Dragon Ball FighterZ: The Kotaku Review',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/kcfjmh7lfx0rr60ko6lw.jpg',
          publisher_id: 2 
        },
        { 
          id: 34,
          article_url: 'https://kotaku.com/valkyria-chronicles-4-the-kotaku-review-1828945440',
          title: 'Valkyria Chronicles 4: The Kotaku Review',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/fhievbkucvwmuuriihl4.jpg',
          publisher_id: 2 
        },
        { 
          id: 35,
          article_url: 'https://kotaku.com/destiny-2-forsaken-the-kotaku-review-1829226372',
          title: 'Destiny 2: Forsaken: The Kotaku Review',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/ztnoeqjju3lgvs4myoez.jpg',
          publisher_id: 2 
        },
        { 
          id: 36,
          article_url: 'https://kotaku.com/shadow-of-the-tomb-raider-the-kotaku-review-1828924874',
          title: 'Shadow of the Tomb Raider: The Kotaku Review',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,fl_progressive,g_center,h_77,q_80,w_137/chepwtjnsd4yzczvvxty.jpg',
          publisher_id: 2 
        }
      ])
    })
}
