const CATEGORIES = [
  'Specialty Pizzas',
  'Build Your Own',
  'Subs & Sandwiches',
  'Wings & Sides',
  'Salads',
];

export default {
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  orderings: [
    {
      title: 'Category, then Sort Order',
      name: 'categorySort',
      by: [{ field: 'category', direction: 'asc' }, { field: 'sortOrder', direction: 'asc' }],
    },
  ],
  fields: [
    {
      name: 'name',
      title: 'Item Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: CATEGORIES.map(c => ({ title: c, value: c })),
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price ($)',
      type: 'number',
      validation: Rule => Rule.required().positive(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'available',
      title: 'Available / Visible',
      type: 'boolean',
      initialValue: true,
      description: 'Uncheck to hide this item from the online menu.',
    },
    {
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      description: 'Lower numbers appear first within a category.',
      initialValue: 99,
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'image',
      price: 'price',
      available: 'available',
    },
    prepare({ title, subtitle, media, price, available }) {
      return {
        title: `${available === false ? '🔴 ' : ''}${title}`,
        subtitle: `${subtitle} — $${price?.toFixed(2) ?? '—'}`,
        media,
      };
    },
  },
};
