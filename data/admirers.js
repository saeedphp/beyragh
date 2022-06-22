import img1 from '../public/images/services/admirers/1.jpg';
import img2 from '../public/images/services/admirers/2.jpg';
import img3 from '../public/images/services/admirers/3.jpg';
import img4 from '../public/images/services/admirers/4.jpg';

const DUMMY_DATAS = [
    {
        id: 'd1',
        name: 'رسول سلطانی',
        expertise: 'مداح / سخنران',
        tel: '021-33794747',
        address: 'تهران، خیابان آذربایجان، تقاطع خیابان خوش، پلاک 829، جنب داروخانه جوکار، طبقه اول',
        profile: img1,
    },
    {
        id: 'd2',
        name: 'حسینیه هدایت',
        expertise: '',
        tel: '021-33794747',
        address: 'تهران، خیابان آذربایجان، تقاطع خیابان خوش، پلاک 829، جنب داروخانه جوکار، طبقه اول',
        profile: img2,
    },
    {
        id: 'd3',
        name: 'ناصر محولاتی',
        expertise: 'مداح / قاری',
        tel: '021-33794747',
        address: 'تهران، خیابان آذربایجان، تقاطع خیابان خوش، پلاک 829، جنب داروخانه جوکار، طبقه اول',
        profile: img3,
    },
    {
        id: 'd4',
        name: 'محمدرضا عسگری',
        expertise: 'سخنران',
        tel: '021-33794747',
        address: 'تهران، خیابان آذربایجان، تقاطع خیابان خوش، پلاک 829، جنب داروخانه جوکار، طبقه اول',
        profile: img4,
    },
];

const DUMMY_DATA = [
    {
        id: 'kh1',
        name: 'سخنران',
    },
    {
        id: 'kh2',
        name: 'مداح',
    },
    {
        id: 'kh3',
        name: 'قاری',
    },
    {
        id: 'kh4',
        name: 'حسینیه',
    },
];

export const Khadamat = () => {
    return DUMMY_DATA;
};

export const allAdmirers = () => {
    return DUMMY_DATAS;
};