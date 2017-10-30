const
	mongoose = require('mongoose'),
	postSchema = new mongoose.Schema({
		title: {type: String, default: "Untitled"},
		categories: {type: String, default: "Uncategorized"},
		body: {type: String, default: ""}
	}, {timestamps: true})

const Post = mongoose.model('Post', postSchema)
module.exports = Post