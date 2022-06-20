import img1 from '../public/images/services/hoghoghi/1.png';
import img2 from '../public/images/services/hoghoghi/2.png';
import img3 from '../public/images/services/hoghoghi/3.png';
import img4 from '../public/images/services/hoghoghi/4.png';

const DUMMY_DATAS = [
    {
        id: 'd1',
        name: 'رسول سلطانی',
        expertise: 'مشاوره حقوقی',
        tel: '021-33794747',
        address: 'تهران، خیابان آذربایجان، تقاطع خیابان خوش، پلاک 829، جنب داروخانه جوکار، طبقه اول',
        profile: img1,
    },
    {
        id: 'd2',
        name: 'سرور ثانی نژاد',
        expertise: 'مشاوره حقوقی / وکیل ملکی',
        tel: '021-33794747',
        address: 'تهران، خیابان آذربایجان، تقاطع خیابان خوش، پلاک 829، جنب داروخانه جوکار، طبقه اول',
        profile: img2,
    },
    {
        id: 'd3',
        name: 'علیرضا عسگری',
        expertise: 'مشاوره حقوقی',
        tel: '021-33794747',
        address: 'تهران، خیابان آذربایجان، تقاطع خیابان خوش، پلاک 829، جنب داروخانه جوکار، طبقه اول',
        profile: img3,
    },
    {
        id: 'd4',
        name: 'سیما امیری',
        expertise: 'مشاوره حقوقی',
        tel: '021-33794747',
        address: 'تهران، خیابان آذربایجان، تقاطع خیابان خوش، پلاک 829، جنب داروخانه جوکار، طبقه اول',
        profile: img4,
    },
];

const DUMMY_DATA = [
    {
        id: 'kh1',
        name: 'خدمات وکالت',
    },
    {
        id: 'kh2',
        name: 'مشاوره حقوقی',
    },
    {
        id: 'kh3',
        name: 'وکیل کیفری',
    },
    {
        id: 'kh4',
        name: 'وکیل مهاجرت',
    },
    {
        id: 'kh5',
        name: 'وکیل ملکی',
    },
    {
        id: 'kh6',
        name: 'وکیل کیفری',
    },
];

export const Khadamat = () => {
    return DUMMY_DATA;
};

export const allHoghoghi = () => {
    return DUMMY_DATAS;
};