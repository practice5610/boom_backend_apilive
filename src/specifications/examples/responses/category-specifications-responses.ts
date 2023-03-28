import { APIResponseMessages } from '../../../constants';

// TODO: Use helpers for testing to build the response data here

export const POSTCategoriesResponseExamples = {
  SUCCESS: {
    success: true,
    message: APIResponseMessages.SUCCESS,
    data: {
      _id: '60a81021a93b18a3acd93b11',
      createdAt: 1621626913,
      updatedAt: 1621626913,
      name: 'Test',
      commissionRate: 0,
      subCategories: ['Sub'],
    },
  },
};

export const GETCategoryCountResponseExamples = {
  SUCCESS: {
    success: true,
    message: APIResponseMessages.SUCCESS,
    data: {
      count: 1,
    },
  },
};
export const GETCategoriesSpecificationResponseExamples = {
  SUCCESS: {
    success: true,
    message: APIResponseMessages.SUCCESS,
    data: [
      {
        _id: '5d12bf519eb1641840519334',
        createdAt: 1561509568,
        updatedAt: 1571085765,
        name: 'Apparel, shoes, jewelry',
        subCategories: ['Accessories', 'Apparel', 'Jewelry & watches', 'Shoes'],
      },
      {
        _id: '5d12c0369eb1641840519354',
        createdAt: 1561509568,
        updatedAt: 1571085765,
        name: 'Automotive, tool & industrial',
        subCategories: [
          'Automotive',
          'Business',
          'Food service',
          'Industrial',
          'Law enforcement',
          'Office maintenance',
          'janitorial & lunchroom',
          'Tool',
        ],
      },
      {
        _id: '5d12c0c89eb1641840519363',
        createdAt: 1561509568,
        updatedAt: 1571085765,
        name: 'Books',
        subCategories: [
          'Accessories',
          'Art',
          'Blank book/journal/diary',
          'Calendar',
          'Computers',
          'Cooking',
          'Crafts & hobbies',
          'Education',
          'Games',
          'Gardening',
          'Juvenile diary, blank book, journal',
          'Magazines',
          'Mathematics',
          'Non-classifiable',
          'Reference',
          'Self-help',
          'Sports & recreation',
          'Technology',
        ],
      },
      {
        _id: '5d12c1659eb164184051936f',
        createdAt: 1561509568,
        updatedAt: 1571085765,
        name: 'Electronics & computer',
        subCategories: [
          'Accessories',
          'Automotive electronics',
          'Batteries',
          'Camera &  photo',
          'Cell phones & Accessories',
          'Clocks/Clock radio',
          'Computer',
          'Furniture',
          'General',
          'GPS',
          'Headphones',
          'Home audio',
          'Home automation & security',
          'iPod, mp3, media players',
          'Marine',
          'Office electronics',
          'Office products & supplies',
          'Optics',
          'Phone & telecom',
          'Portable audio & video',
          'Speakers',
          'Spy Gadgets',
          'Tv & video',
          'Two-way, scanners & monitors',
          'iPad, Tablets, eReaders',
        ],
      },
      {
        _id: '5d12c1959eb1641840519376',
        createdAt: 1561509568,
        updatedAt: 1571085765,
        name: 'Games, movies & music',
        subCategories: ['Music', 'Video', 'Video Games'],
      },
      {
        _id: '5d12c21a9eb1641840519381',
        createdAt: 1561509568,
        updatedAt: 1571085765,
        name: 'Health & beauty',
        subCategories: [
          'Adult-Mature',
          'Bath & shower',
          'Cosmetics & makeup',
          'Exercise equipment',
          'Gifts sets',
          'Green tea healthcare',
          'Hair',
          'Healthcare',
          'Massages & relaxation',
          'Natural, homeopathic & alternative',
          'Nutrition',
          'Perfume & fragrances',
          'Personal appliance & tools',
          'Sexual wellness',
          'Shavers & hair removal',
          'Skincare',
          'Vitamins & supplements',
        ],
      },
      {
        _id: '5d12c2bc9eb1641840519390',
        createdAt: 1561509568,
        updatedAt: 1571085766,
        name: 'Home, garden & living',
        subCategories: [
          'As seen on tv',
          'Backyard birding',
          'Bath',
          'Bedding',
          'Collectibles',
          'Craft, seing & hobby',
          'Food & beverage',
          'Furniture',
          'Gift Cards',
          'Gifts Home decor',
          'Home improvement',
          'Kitchen & dining',
          'Lamps & lighting',
          'Large appliance',
          'Licensed Merchandise',
          'Musical instruments',
          'Outdoor cooking',
          'Outdoor decor',
          'Parlor, entertainment & gameroom',
          'Patio',
          'Pet supplies',
          'Plant & garden',
          'Pool & Spa',
          'Rug & floor coverings',
          'Small appliance',
          'Travel & luggage',
          'Vaccum, household & cleaning',
        ],
      },
      {
        _id: '5d12c2e69eb1641840519397',
        createdAt: 1561509568,
        updatedAt: 1571085766,
        name: 'Kids, baby & toy',
        subCategories: ['Kid & baby', 'Toy'],
      },
      {
        _id: '5d12c3dc9eb16418405193ab',
        createdAt: 1561509568,
        updatedAt: 1571085766,
        name: 'Outdoor & sports',
        subCategories: [
          'Accessories',
          'Airsoft',
          'Archery',
          'Badminton',
          'Ballet & dance',
          'Baseball',
          'Basketball',
          'Boating',
          'Bowling',
          'Boxing',
          'Camping & hiking',
          'Climbing',
          'Cricket',
          'Cycling & wheel sports',
          'Disc sports',
          'Diving',
          'Dog sports',
          'Electronics',
          'Equestrian sports',
          'Exercise & fitness',
          'Fan gear',
          'Fending',
          'Fishing',
          'Football',
          'Game room',
          'General sports',
          'Gold',
          'Gymnastics',
          'Hockey',
          'Hunting',
          'Kayaking',
          'Lawn games',
          'Martial arts',
          'Motor sports',
          'Pilates',
          'Running Rv equipment',
          'Skateboarding',
          'Skating',
          'Snow skiing',
          'Snowmobiling',
          'Snowshoeing',
          'Soccer',
          'Softball',
          'Sports electronics & gadgets',
          'Sports medicine',
          'Surfing',
          'Swimming',
          'Tennis & racquet sports',
          'Track & field',
          'Volleyball',
          'Water polo',
          'Water sports',
          'Wrestling',
          'Yoga',
        ],
      },
      {
        _id: '5e8266da790b6f2f28e44188',
        createdAt: 1585604314,
        updatedAt: 1585604314,
        name: 'Coronavirus',
        subCategories: ['Subcat 1', 'Subcat 2', 'Subcat 3'],
      },
    ],
  },
};
export const GETCategoriesIdSpecificationResponseExamples = {
  SUCCESS: {
    success: true,
    message: APIResponseMessages.SUCCESS,
    data: {
      _id: '5d12c0369eb1641840519354',
      createdAt: 1561509568,
      updatedAt: 1571085765,
      name: 'Automotive, tool & industrial',
      subCategories: [
        'Automotive',
        'Business',
        'Food service',
        'Industrial',
        'Law enforcement',
        'Office maintenance',
        'janitorial & lunchroom',
        'Tool',
      ],
    },
  },
};