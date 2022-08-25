export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{type: 'image'}],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'price',
            title: 'price',
            type: 'number'
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        },
        {
            name: 'reviews',
            title: 'Reviews',
            type: 'array',
            of: [{type: 'string'}],
        },
        {
            name: 'stars',
            title: 'Stars',
            type: 'array',
            of: [{type: 'number'}],
        }
    ],
}