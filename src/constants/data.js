import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Epicurean Excellence',
    subtitle: 'Celebrating a menu that pushes culinary boundaries with finesse and flavor.',
  },
  {
    imgUrl: images.award01,
    title: 'Culinary Visionary',
    subtitle: 'Honoring innovative techniques and creativity in the art of cooking.',
  },
  {
    imgUrl: images.award05,
    title: 'Golden Plate Award',
    subtitle: 'Acknowledging a perfect blend of ambiance, service, and exceptional cuisine.',
  },
  {
    imgUrl: images.award03,
    title: 'Master of Flavors',
    subtitle: 'Recognizing a chef’s unique ability to craft unforgettable taste experiences.',
  },
];


const data = { 
  wines, 
  cocktails, 
  awards 
};

export default data;

// export default { wines, cocktails, awards };
