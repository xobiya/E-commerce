import Item1 from '../assets/Images/Game.png'
import Item2 from '../assets/Images/Keyboard.png'
import Item3 from '../assets/Images/Monitor.png'
import Item4 from '../assets/Images/Chain.png'
import like from '../assets/Icons/like.png'
import FillEye from '../assets/Icons/Fill Eye.png'

import Category1 from '../assets/Images/Category-Camera.png'
import Category2 from '../assets/Images/Category-CellPhone.png'
import Category3 from '../assets/Images/Category-Computer.png'
import Category4 from '../assets/Images/Category-Gamepad.png'
import Category5 from '../assets/Images/Category-Headphone.png'
import Category6 from '../assets/Images/Category-SmartWatch.png'

import pro1 from '../assets/Images/coat.png'
import pro2 from '../assets/Images/bag.png'
import pro3 from '../assets/Images/cpu.png'
import pro4 from '../assets/Images/shelf.png'
import Item5 from '../assets/Images/Dog.png'
import Item6 from '../assets/Images/sony-Camera.png'
import Item7 from '../assets/Images/pc.png'
import Item8 from '../assets/Images/cosmo.png'
import Item9 from '../assets/Images/car-toy.png'
import Item10 from '../assets/Images/Copa_Sense.png'
import Item11 from '../assets/Images/GP11_PRD3 1.png'
import Item12 from '../assets/Images/coat-2.png'


export const Items=[
     {
        id: 1,
        name : "Gamepad",
        price:'$180',
        PriceDiscount:'$100',
        image: Item1,
        description: "HAVIT HVG92 Gamepad",
        Discount: "-40%",
        reviwes: "88",
        icons: [
            {
                id: 1,
                icon: like,
                alt: "like icon"
            },
            {
                id: 2,
                icon: FillEye,
                alt: "eye icon"
            }
        ]
    },
    {
        id: 2,
        name : "Keyboard",
        price:'$120',
        PriceDiscount:'$80',
        image: Item2,
        description: "HAVIT HVK87 Keyboard",
        Discount: "-35%",
        reviwes: "75",
         icons: [
            {
                id: 1,
                icon: like,
                alt: "like icon"
            },
            {
                id: 2,
                icon: FillEye,
                alt: "eye icon"
            }
        ]
    },
    {
        id: 3,
        name : "Monitor",
        price:'$900',
        PriceDiscount:'$600',
        image: Item3,
        description: "LG 24MP59G-P Monitor",
        Discount: "-30%",
        reviwes: "98",
         icons: [
            {
                id: 1,
                icon: like,
                alt: "like icon"
            },
            {
                id: 2,
                icon: FillEye,
                alt: "eye icon"
            }
        ]

    },
    {
        id: 4,
        name : "Chair",
        price:'$80',
        PriceDiscount:'$60',
        image: Item4,
        description: "Chair Gaming",
        Discount: "-25%",
        reviwes: "95",
         icons: [
            {
                id: 1,
                icon: like,
                alt: "like icon"
            },
            {
                id: 2,
                icon: FillEye,
                alt: "eye icon"
            }
        ]
    }
];

export const categoryItems = [
    {
        id: 1,
        name: "Camera",
        image: Category1,
        description: "Camera",
    },
    {
        id: 2,
        name: "Cell Phone",
        image: Category2,
        description: "Cell Phone",
    },
    {
        id: 3,
        name: "Computer",
        image: Category3,
        description: "Computer",
    },
    {
        id: 4,
        name: "Gamepad",
        image: Category4,
        description: "Gamepad",
    },
    {
        id: 5,
        name: "Headphone",
        image: Category5,
        description: "Headphone",
    },
    {
        id: 6,
        name: "Smart Watch",
        image: Category6,
        description: "Smart Watch",
    }

];

export const SellingItems = [
    {
        id: 1,
        name : "Coat",
        price:'$280',
        PriceDiscount:'$190',
        image: pro1,
        description: "The north coat",
        Discount: "-40%",
        reviwes: "88",
    },
    {
        id: 2,
        name : "Bag",
        price:'$520',
        PriceDiscount:'$380',
        image: pro2,
        description: "Gucci duffle Bag",
        Discount: "-35%",
        reviwes: "75",
    },
    {
        id: 3,
        name : "CPU",
        price:'$160',
        PriceDiscount:'$150',
        image: pro3,
        description: "RGB liquid CPU cooler",
        Discount: "-30%",
        reviwes: "68",
    },
    {
        id: 4,
        name : "Shelf",
        price:'$380',
        PriceDiscount:'$320',
        image: pro4,
        description: "Small book shelf",
        Discount: "-25%",
        reviwes: "65",
    }
];
export const Products = [
    {
        id: 1,
        name : "Dog",
        price:'$180',
        image: Item5,
        description: "Breed Dog",
        reviwes: "88",
    },
    {
        id: 2,
        name : "Camera",
        price:'$120',
        image: Item6,
        description: "CANON EOS DSLR Camera",
        reviwes: "95",
    },
    {
        id: 3,
        name : "PC",
        price:'$900',
        image: Item7,
        description: "ASUS FHD Gaming Laptop",
        reviwes: "348",
    },
    {
        id: 4,
        name : "Cosmo",
        price:'$500',
        image: Item8,
        description: "Curology Product Set",
        reviwes: "145",
    },
    {
        id: 5,
        name : "Car Toy",
        price:'$950',
        image: Item9,
        Status:'New',
        description: "Kid Electric Car",
        reviwes: "95",
    },
    {
        id: 6,
        name : "Copa Sense",
        price:'$1160',
        image: Item10,
        description: "Jr. Zoom Soccer Cleats",
        reviwes: "35",
    },
    {
        id: 7,
        name : "GP11_PRD3 1",
        price:'$680',
        image: Item11,
        Status:'New',
        description: "GP11 Shooter USB Gamepad",
        reviwes: "95",
    },
    {
      id: 8,
      name : "Coat-2",
      price:'$430',
      image: Item12,
      description: "Quilted satin Jacket",
      reviwes: "55",
    }];
export const wishlist = [
  {
    id: 1,
    name: "Quilted Coat",
    price: "$750",
    oldPrice: "$950",
    discount: 21,
    image: pro1,
    description: "Winter-ready quilted coat",
  },
  {
    id: 2,
    name: "Gucci Duffle Bag",
    price: "$960",
    oldPrice: "$1160",
    discount: 35,
    image: pro2,
    description: "Luxury designer bag",
  },
  {
    id: 3,
    name: "RGB Liquid CPU Cooler",
    price: "$1960",
    image: pro3,
    description: "High-performance cooling system",
  },
  {
    id: 4,
    name: "Modern Shelf Set",
    price: "$450",
    image: pro4,
    description: "Wooden floating shelves",
  },
  {
    id: 5,
    name: "Dog Plush Toy",
    price: "$65",
    image: Item5,
    description: "Soft, cuddly dog plushie",
  },
  {
    id: 6,
    name: "Sony Alpha Camera",
    price: "$860",
    oldPrice: "$950",
    discount: 10,
    image: Item6,
    description: "Professional mirrorless camera",
  },
  {
    id: 7,
    name: "Gaming PC Setup",
    price: "$2500",
    image: Item7,
    description: "Ultimate performance desktop",
  },
  {
    id: 8,
    name: "Cosmo Skincare Pack",
    price: "$130",
    image: Item8,
    description: "Complete daily skin care combo",
  },
];