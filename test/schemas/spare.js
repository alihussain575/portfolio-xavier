export default {
    name: "spare",
    title: "spare",
    type: "document",
    fields: [
        {
            name: "description",
            title: "Description",
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
