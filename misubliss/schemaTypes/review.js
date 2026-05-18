export default {
  name: 'review',
  title: 'Customer Review',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Customer Name',
      type: 'string',
    },
    {
      name: 'review',
      title: 'Review Text',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Customer Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}