export default {
	name: "project",
	title: "Project",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
			validation: Rule => Rule.required()
		},
		{
			name: "description",
			title: "Description",
			type: "string",
			validation: Rule => Rule.required()
		},
		{
			name: "featured",
			title: "Featured",
			type: "boolean",
			validation: Rule => Rule.required()
		},
		{
			name: "coverImage",
			title: "Cover image",
			type: "image",
			validation: Rule => Rule.required(),
			options: {
				hotspot: true
			}
		},
        {
            name: "githubUrl",
            title: "GitHub URL",
            type: "string",
			validation: Rule => Rule.required()
        },
        {
            name: "demoUrl",
            title: "Demo URL",
            type: "string",
			validation: Rule => Rule.required()
        }
	]
};
