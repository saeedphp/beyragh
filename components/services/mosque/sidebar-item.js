import {Fragment} from "react";
import styles from "./sidebar-item.module.css";
import Link from "next/link";

const SidebarItem = (props) => {

    const {id, title, date} = props;

    return (
        <Fragment>
            <li className={styles.item}>
                                    <span>
                                        {date}
                                    </span>
                <Link href="/">
                    <a>
                        {title}
                    </a>
                </Link>
            </li>
        </Fragment>
    )
};

export default SidebarItem