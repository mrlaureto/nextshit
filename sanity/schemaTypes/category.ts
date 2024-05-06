export default {
    name: 'category',
    type: 'document',
    title: 'Category',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Category Name'
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
            description: 'Describe what this category is about'
        }
    ]
};
