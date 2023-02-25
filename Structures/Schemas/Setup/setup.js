const { model, Schema } = require("mongoose");

module.exports = model(
	"Setup",
	new Schema({
		_id: String,
		Welcome: Array
	})
)