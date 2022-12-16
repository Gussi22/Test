const { model, Schema } = require("mongoose");

module.exports = model(
	"Movies",
	new Schema({
		_id: String,
		Upcoming: Array,
		Watching: Array,
		Watched: Array
	})
)