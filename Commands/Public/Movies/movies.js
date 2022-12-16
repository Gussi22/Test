module.exports = {
	name: "movies",
	description: "Add, remove or view your movie watch list",
	options: [
		{
			name: "add",
			type: "SUB_COMMAND",
			description: "Add a movie to your list",
			options: [
				{
					name: "title",
					description: "Enter the title of the movie",
					type: "STRING",
					required: true
				},
				{
					name: "to",
					description: "Choose which list to add the movie",
					type: "STRING",
					required: true,
					choices: [
						{
							name: "upcoming",
							value: "upcoming",
						},
						{
							name: "watching",
							value: "watching",
						},
						{
							name: "watched",
							value: "watched"
						}
					]
				}
			]
		},
		{
			name: "remove",
			type: "SUB_COMMAND",
			description: "Remove a movie from your list",
			options: [
				{
					name: "title",
					description: "Enter the title of the movie",
					type: "STRING",
					required: true
				},
				{
					name: "from",
					description: "Choose which list to remove the movie from",
					type: "STRING",
					required: true,
					choices: [
						{
							name: "upcoming",
							value: "upcoming",
						},
						{
							name: "watching",
							value: "watching",
						},
						{
							name: "watched",
							value: "watched"
						}
					]
				}
			]
		},
		{
			name: "show",
			type: "SUB_COMMAND",
			description: "Shows your watch list"
		}
	]
}