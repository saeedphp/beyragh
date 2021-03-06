const DUMMY_DATA = [
    {
        id: 'b1',
        image: 'images/blog/blog-1.jpg',
        title: 'تامین وعده غذای گرم برای کودکان محروم',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآن چنان که لازم استو برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد های متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
        category: 'اخبار و رویداد ها',
        date: '2021-12-03',
    },
    {
        id: 'b2',
        image: 'images/blog/blog-2.jpg',
        title: 'نکات و آداب زیارت',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآن چنان که لازم استو برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد های متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
        category: 'اخبار و رویداد ها',
        date: '2021-12-03',
    },
    {
        id: 'b3',
        image: 'images/blog/blog-3.jpg',
        title: 'برگزاری هیئت و مجالس عزاداری',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآن چنان که لازم استو برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد های متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
        category: 'تکتولوژی',
        date: '2021-12-03',
    },
    {
        id: 'b4',
        image: 'images/blog/blog-4.jpg',
        title: 'برگزاری هیئت و مجالس عزاداری',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآن چنان که لازم استو برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد های متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
        category: 'اخبار و رویداد ها',
        date: '2021-12-03',
    },
];

export const allBlogs = () => {
    return DUMMY_DATA;
};

export function getPostById(id) {
    return DUMMY_DATA.find((event) => event.id === id);
}

export function getNews() {
    return DUMMY_DATA.filter((event) => event.category==='اخبار و رویداد ها');
}