import Image from "next/image";
import styles from './page-header.module.css';
import Link from "next/link";
import BreadcrumbArrow from "../icons/breadcrumb-arrow";
import Home from "../icons/home";
import bg1 from '../../public/images/page-header/medical.webp';

const PageHeader = ({title,bg,pageTitle,pageLink}) => {

    return (
        <>
            <div style={{ backgroundImage: `url(${bg})` }}>
                <h2>
                    {title}
                </h2>
                <ul>
                    <li>
                        <Link href="/">
                            <a>
                                <Home />
                            </a>
                        </Link>
                    </li>

                    {pageTitle != "" &&
                        <>
                            <BreadcrumbArrow />
                            <li>
                                <Link href={pageLink}>
                                    {pageTitle}
                                </Link>
                            </li>
                        </>
                    }
                    <BreadcrumbArrow />
                    <li>
                        {title}
                    </li>
                </ul>
                <Image src={bg} alt={title} layout={"fill"} />
            </div>
        </>
    )
};

export default PageHeader;