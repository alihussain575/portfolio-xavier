export default {
	name: "tag",
	title: "Tag",
	type: "object",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
			validation: Rule => Rule.required()
		},
		{
			name: "image",
			title: "Image",
			type: "image",
			validation: Rule => Rule.required(),
			options: {
				hotspot: true
			}
		}
	]
};
