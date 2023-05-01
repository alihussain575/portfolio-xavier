export default {
	name: "intro",
	title: "Intro",
	type: "document",
	fields: [
		{
			name: "largeText",
			title: "Large Text",
			type: "content",
			validation: Rule => Rule.required()
		},
		{
			name: "smallText",
			title: "Small Text",
			type: "content",
            validation: Rule => Rule.required()
		}
	]
};
