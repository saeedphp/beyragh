import Insta from "../components/icons/social/insta";
import Twitter from "../components/icons/social/twitter";
import Whatsapp from "../components/icons/social/whatsapp";
import Linkedin from "../components/icons/social/linkedin";
import Telegram from "../components/icons/social/telegram";

const DUMMY_DATA = [
    {
        id: 's1',
        link: '#',
        icon: <Insta />,
    },
    {
        id: 's2',
        link: '#',
        icon: <Twitter />,
    },
    {
        id: 's3',
        link: '#',
        icon: <Whatsapp />,
    },
    {
        id: 's4',
        link: '#',
        icon: <Linkedin />,
    },
    {
        id: 's5',
        link: '#',
        icon: <Telegram />,
    },
];

export const getAllSocial = () => {
    return DUMMY_DATA;
};