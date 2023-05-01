export default {
	name: "contact",
	title: "Contact",
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