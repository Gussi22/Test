module.exports = {
	name: "anime",
	description: "Get a random anime quote",
	options: [
		{
			name: "title",
			description: "Get a random quote from a title",
			type: "SUB_COMMAND",
			options: [
				{
					name: "query",
					type: "STRING",
					description: "Enter an anime title"
				}
			]
		},
		{
			name: "character",
			description: "Get a random quote from a character",
			type: "SUB_COMMAND",
			options: [
				{
					name: "query",
					type: "STRING",
					description: "Enter an anime character"
				}
			]
		},
		{
			name: "random",
			description: "Get a random quote from a random anime",
			type: "SUB_COMMAND"
		}
	]
}