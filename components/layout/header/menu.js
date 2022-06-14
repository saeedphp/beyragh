import styles from './menu.module.css';
import Link from "next/link";
import {getAllMenu} from "../../../data/menu";
import {Fragment, useState} from "react";
import HamburgerMenu from "../../icons/hamburger-menu";
import Cross from "../../icons/cross";

const Menu = () => {

    const menuItems = getAllMenu();

    const [showMenu, setShowMenu] = useState(false);

    const showSidebar = () => {
        setShowMenu(!showMenu);
    }

    return (
      <Fragment>

          <div className={`${styles.menu} ${styles['desktop-menu']}`}>
              <nav>
                  <ul className={styles.nav}>
                      {menuItems.map((menuItem) => (
                          <li key={menuItem.id}>
                              <Link href={`/${menuItem.link}`}>
                                  <a>
                                      {menuItem.title}
                                  </a>
                              </Link>
                          </li>
                      ))}
                  </ul>
              </nav>
          </div>

          <div className={`${styles.menu} ${styles['mobile-menu']}`}>
              <span onClick={showSidebar}>
                  <HamburgerMenu />
              </span>
              <div className={showMenu ? 'overlay active' : 'overlay'} onClick={showSidebar}>

              </div>
              <nav>
                  <ul className={showMenu ? 'nav active' : 'nav'}>
                      <li onClick={showSidebar}>
                          <Cross />
                      </li>
                      {menuItems.map((item, index) => (
                          <li key={index}>
                              <Link href={`/${item.link}`}>
                                  <a>
                                      {item.title}
                                  </a>
                              </Link>
                          </li>
                      ))}
                  </ul>
              </nav>
          </div>

      </Fragment>
    );
};

export default Menu;