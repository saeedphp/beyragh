import img1 from '../public/images/services/medical/doctors/1.jpg';
import img2 from '../public/images/services/medical/doctors/2.png';
import img3 from '../public/images/services/medical/doctors/3.png';
import img4 from '../public/images/services/medical/doctors/5.png';

const DUMMY_DATAS = [
    {
        id: 'd1',
        name: 'دکتر محمدرضا عسگریان',
        expertise: ' متخصص مغز و اعصاب',
        tel: '021-33794747',
        address: 'تهران، خیابان آذربایجان، تقاطع خیابان خوش، پلاک 829، جنب داروخانه جوکار، طبقه اول',
        profile: img1,
    },
    {
        id: 'd2',
        name: 'دکتر محمدرضا عسگریان',
        expertise: ' متخصص مغز و اعصاب',
        tel: '021-33794747',
        address: 'تهران، خیابان آذربایجان، تقاطع خیابان خوش، پلاک 829، جنب داروخانه جوکار، طبقه اول',
        profile: img3,
    },
    {
        id: 'd3',
        name: 'دکتر الهام فرهمند',
        expertise: ' متخصص مغز و اعصاب',
        tel: '021-33794747',
        address: 'تهران، خیابان آذربایجان، تقاطع خیابان خوش، پلاک 829، جنب داروخانه جوکار، طبقه اول',
        profile: img2,
    },
    {
        id: 'd4',
        name: 'دکتر محسن ذوالفقاری',
        expertise: ' متخصص مغز و اعصاب',
        tel: '021-33794747',
        address: 'تهران، خیابان آذربایجان، تقاطع خیابان خوش، پلاک 829، جنب داروخانه جوکار، طبقه اول',
        profile: img4,
    },
];

export const Doctors = () => {
    return DUMMY_DATAS;
};


const DUMMY_DATA = [
    {
        id: 'kh1',
        name: 'مغز و اعصاب',
    },
    {
        id: 'kh2',
        name: 'گوارش و کبد ',
    },
    {
        id: 'kh3',
        name: 'داخلی',
    },
    {
        id: 'kh4',
        name: 'ارتوپدی',
    },
    {
        id: 'kh5',
        name: 'چشم پزشکی',
    },
    {
        id: 'kh6',
        name: 'مغز و اعصاب کودکان',
    },
];

export const Takhasos = () => {
    return DUMMY_DATA;
};