const
	express = require('express'),
	postsRouter = new express.Router(),
	postsCtrl = require('../controllers/posts.js')

postsRouter.route('/')
	.get(postsCtrl.index)
	.post(postsCtrl.create)

postsRouter.route('/:id')
	.get(postsCtrl.show)
	.patch(postsCtrl.update)
	.delete(postsCtrl.destroy)

module.exports = postsRouter