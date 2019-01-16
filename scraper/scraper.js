
const puppeteer = require('puppeteer');
const fetch = require('node-fetch');
// console.log('scraping started')
module.exports = async () => {
	let gameSpotUrl = 'https://www.gamespot.com/news/'
	let kotakuUrl = 'https://kotaku.com/'
	let destructoidUrl = 'https://www.destructoid.com/'

	let browser = await puppeteer.launch({ headless: true })
	let page = await browser.newPage()

	await page.goto(destructoidUrl);
	await autoScroll(page)
	const destructoidArticles = await page.evaluate(() => {
		let articles = Array.from(document.querySelectorAll('div#middle_content-wrapper > div[class="3columnhack"] > article.smlpost:not([style])')).map(article => {
			return {
				article_url: article.querySelector('figure > a').href,
				title: article.querySelector('div.smlpost-content > h2').innerText,
				img_url: article.querySelector('figure > a > img').src,
				date_time: article.querySelector('div.smlpost-content > div.smlpost-byline > div.smlpost-datetime').innerHTML,
				publisher_id: 1,
				favorited: false
			}
		})
		return articles
	})
	postArticles(destructoidArticles)
	console.log("destructoid",destructoidArticles)

	await page.goto(kotakuUrl)
	await autoScroll(page)
	const kotakuArticles = await page.evaluate(() => {
		// scrape articles from Kotaku
		let articles = Array.from(document.querySelectorAll('section > div.main__content > div.post-list--pe > div.post-wrapper.js_post-wrapper:not(.streamshare) > article'))
		.map(article => {
			const itemContent = article.querySelector('div.item__content')
			const picture = itemContent.querySelector('source[srcset$=".png"]')
			return {
				article_url: article.querySelector('header > h1 > a').href,
				title: article.querySelector('header > h1').innerText,
				img_url: picture && picture.srcset,
				date_time: article.querySelector('header > div.meta--pe > div.meta__container > time > a').innerText,
				publisher_id: 2,
				favorited: false
			}
		})
		return articles
	})
	postArticles(kotakuArticles)
	console.log('kotaku scrape',kotakuArticles)


	await page.goto(gameSpotUrl);
	const gameSpotArticles = await page.evaluate(() => {
		// scrape articles from Gamespot
		let articles = Array.from(document.querySelectorAll('.primary-content > .pod-river > .pod-filter > section > article'))
		.map(article => {
			return {
				article_url: article.querySelector('a').href,
				title: article.querySelector('a > div > h3').innerText,
				img_url: article.querySelector('a > figure > div > img').src,
				date_time: article.querySelector('a > div > footer > time').innerText,
				publisher_id: 3,
				favorited: false
			}
		})
		return articles
	})
	postArticles(gameSpotArticles)
	console.log("gamespot scrape",gameSpotArticles)

async function autoScroll(page){
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 200;
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

function postArticles(articles) {
	fetch('http://localhost:3030/articles', {
    method: 'POST',
    body:    JSON.stringify(articles),
    headers: { 'Content-Type': 'application/json' },
  })
  .then(res => res.json())
  .then(json => console.log(json));
 }
}
