const
	express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/blog-spa',
	PORT = process.env.PORT || 3001,
	postsRoutes = require('./routes/posts.js')

mongoose.connect(MONGODB_URI, (err) => {
	console.log(err || `Connected to MongoDB.`)
})

app.use(bodyParser.json())
app.use(logger('dev'))

// on Heroku, we'll serve a client react app assets from /client/build/:
app.use(express.static(`${__dirname}/client/build`))

app.use((req, res, next) => {
	setTimeout(() => next(), 500)
})

app.use('/api/posts', postsRoutes)

// send the static built react app when serving from Heroku:
app.get('*', (req, res) => {
	res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, (err) => {
	console.log(err || `Server running on port ${PORT}.`)
})