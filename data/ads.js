
import {BsPhone} from 'react-icons/bs';
import {TbSofa} from 'react-icons/tb';
import {GrGamepad} from 'react-icons/gr';
import {RiTShirt2Line} from 'react-icons/ri'

export const adCats = [
  {
    id: 0,
    title: "لوازم الکترونیکی",
    relatedCats: [
      {
        id: 4,
        title: "موبایل و تبلت",
        relatedCats: [],
      },
      {
        id: 5,
        title: "رایانه",
        relatedCats: [{
            id: 16,
            title: "موبایل و تبلت",
            relatedCats: [],
          },],
      },
      
    ],
    // icon: <BsPhone />,
  },
  {
    id: 1,
    title: "خانه و آشپزخانه",
    relatedCats: [
      
    ],
    // icon: <TbSofa />,
  },
  {
    id: 2,
    title: "بازی و سرگرمی",
    relatedCats: [
      
    ],
    // icon: <GrGamepad />,
  },
  {
    id: 3,
    title: "مد و پوشاک",
    relatedCats: [],
    // icon: <RiTShirt2Line />,
  },
];
