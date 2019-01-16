
const puppeteer = require('puppeteer');
const fetch = require('node-fetch');
// console.log('scraping started')
module.exports = async () => {
	let gameSpotUrl = 'https://www.gamespot.com/news/'
	let kotakuUrl = 'https://kotaku.com/'
	let polygonUrl = 'https://www.polygon.com/gaming'

	let browser = await puppeteer.launch({ headless: false })
	let page = await browser.newPage()

	// await page.goto(polygonUrl);
	// const polygonArticles = await page.evaluate(() => {
		
	// 	// scrape articles from polygon
	// 	let articles = Array.from(document.querySelectorAll('div.c-compact-river__entry')).map(article => {
	// 		return {
	// 			article_url: article.querySelector('div.c-entry-box--compact--article > a.c-entry-box--compact__image-wrapper').href,
	// 			title: article.querySelector('div > div.c-entry-box--compact__body > h2').innerText,
	// 			img_url: article.querySelector('div.c-entry-box--compact--article > a > div > img').src,
	// 			publisher_id: 1
	// 		}
	// 	})
	// 	return articles
	// })
	// console.log(polygonArticles)


	// await page.goto(gameSpotUrl);
	// const gameSpotArticles = await page.evaluate(() => {
		
	// 	// scrape articles from Gamespot
	// 	let articles = Array.from(document.querySelectorAll('.primary-content > .pod-river > .pod-filter > section > article'))
	// 	.map(article => {
	// 		return {
	// 			article_url: article.querySelector('a').href,
	// 			title: article.querySelector('a > div > h3').innerText,
	// 			img_url: article.querySelector('a > figure > div > img').src,
	// 			date: article.querySelector('a > div > footer > time').innerText,
	// 			publisher_id: 1
	// 		}
	// 	})
	// 	return articles
	// })
	// postArticles(gameSpotArticles)
	// console.log("gamespot scrape",gameSpotArticles)

	
	await page.goto(kotakuUrl)
	await autoScroll(page)
	const kotakuArticles = await page.evaluate(() => {
		// scrape articles from Kotaku
		let articles = Array.from(document.querySelectorAll('section > div.main__content > div.post-list--pe > div.post-wrapper.js_post-wrapper:not(.streamshare) > article'))
		.map(article => {
			const itemContent = article.querySelector('div.item__content')
			const picture = itemContent.querySelector('source[srcset$=".png"]')
			console.log(itemContent, picture)
			return {
				article_url: article.querySelector('header > h1 > a').href,
				title: article.querySelector('header > h1').innerText,
				img_url: picture && picture.srcset,
				publisher_id: 2
			}
		})
		return articles
	})
	// postArticles(kotakuArticles);
	console.log('kotaku scrape',kotakuArticles)


async function autoScroll(page){
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 500;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if(totalHeight >= scrollHeight){
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        })
    })
}

// function postArticles(articles) {
// 	fetch('http://localhost:3030/articles', {
//     method: 'POST',
//     body:    JSON.stringify(articles),
//     headers: { 'Content-Type': 'application/json' },
//   })
//   .then(res => res.json())
//   .then(json => console.log(json));
//  }
}
