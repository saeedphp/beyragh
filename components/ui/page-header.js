import Image from "next/image";
import styles from './page-header.module.css';
import Link from "next/link";
import BreadcrumbArrow from "../icons/breadcrumb-arrow";
import Home from "../icons/home";
import bg1 from '../../public/images/page-header/medical.webp';

const PageHeader = ({title, pageTitle, pageLink, image}) => {

    return (
        <>
            <div className={styles.pageHeader} style={{backgroundImage: `url(../../images/page-header/${image})`}}>
                <h2 className={styles.title}>
                    {title}
                </h2>
                <ul className={styles.list}>
                    <li>
                        <Link href="/">
                            <a>
                                <Home/>
                            </a>
                        </Link>
                    </li>

                    {pageTitle != "" &&
                        <>
                            <BreadcrumbArrow/>
                            <li>
                                <Link href={pageLink}>
                                    {pageTitle}
                                </Link>
                            </li>
                        </>
                    }
                    <BreadcrumbArrow/>
                    <li>
                        {title}
                    </li>
                </ul>
            </div>
        </>
    )
};

export default PageHeader;