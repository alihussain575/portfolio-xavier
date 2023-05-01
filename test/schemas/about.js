export default {
	name: "about",
	title: "About",
	type: "document",
	fields: [
		{
			name: "body",
			title: "Body",
			type: "content",
			validation: Rule => Rule.required()
		}
	]
};