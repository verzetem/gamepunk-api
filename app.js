const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 3030

const usersRoutes = require('./routes/users')
const favRoutes = require('./routes/favorites')
const userFavRoutes = require('./routes/userFavorites')
const scrapedArticles = require('./routes/scrapedArticles')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.get('/', (req, res, next) => {
	res.json({
		message: `GamePunk API running on port ${port}`,
		message2: 'use /users or /users_favorites routes'
	})
})

app.use('/users', usersRoutes)
app.use('/favorites', favRoutes)
app.use('/userfavorites', userFavRoutes)
app.use('/articles', scrapedArticles)


app.use(notFound)
// General purpose 'catch' all errors
app.use(errorHandler)

function notFound(req, res, next) {
    res.status(404).send({ error: 'Not found!', status: 404, url: req.originalUrl })
}

// eslint-disable-next-line
function errorHandler(err, req, res, next) {
    console.error('ERROR', err)
    const stack = process.env.NODE_ENV !== 'production' ? err.stack : undefined
    res.status(500).send({ error: err.message, stack, url: req.originalUrl })
}

app.listen(port, () => console.log(`Server running on port ${port}`))