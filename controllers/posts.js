const Post = require('../models/Post.js')

module.exports = {
	index: (req, res) => {
		Post.find({}, (err, posts) => {
			res.json(posts)
		})
	},

	show: (req, res) => {
		Post.findById(req.params.id, (err, post) => {
			res.json(post)
		})
	},

	create: (req, res) => {
		Post.create(req.body, (err, post) => {
			res.json({ success: true, message: "Post created.", post })
		})
	},

	update: (req, res) => {
		Post.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, post) => {
			res.json({ success: true, message: "Post updated.", post })
		})
	},

	destroy: (req, res) => {
		Post.findByIdAndRemove(req.params.id, (err, post) => {
			res.json({ success: true, message: "Post deleted.", post })
		})
	}
}