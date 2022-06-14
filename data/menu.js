const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'صفحه اصلی',
        link: '/',
    },
    {
        id: 'm2',
        title: 'خدمات',
        link: '',
    },
    {
        id: 'm3',
        title: 'اخبار و رویداد',
        link: 'blog',
    },
    {
        id: 'm4',
        title: 'سوالات متداول',
        link: 'faq',
    },
    {
        id: 'm5',
        title: 'درباره ما',
        link: 'aboutus',
    },
    {
        id: 'm6',
        title: 'تماس با ما',
        link: 'contactus',
    },
];

export const getAllMenu = () => {
    return DUMMY_DATA;
};