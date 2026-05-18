export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',

  fields: [
    {
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
    },

    {
      name: 'logo',
      title: 'Logo',
      type: 'image',

      options: {
        hotspot: true,
      },
    },
  ],
}