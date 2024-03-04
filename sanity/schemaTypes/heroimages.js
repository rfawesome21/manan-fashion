export default {
  name: 'heroImage',
  title: 'Two hero images',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
    },
    {
        name: 'altText',
        title: 'Alt Text',
        type: 'string',
    },
    {
        name: 'image2',
        title: 'Image 2',
        type: 'image',
    },
    {
        name: 'caption2',
        title: 'Caption 2',
        type: 'string',
    },
    {
        name: 'altText2',
        title: 'Alt Text 2',
        type: 'string',
    },
  ],
};
