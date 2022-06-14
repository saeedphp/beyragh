import {Fragment} from "react";
import styles from "./sidebar.module.css";
import Card from "../ui/card";
import SearchSidebar from "../icons/search-sidebar";
import Search from "./search";
import SidebarBlog from "../icons/sidebar-blog";
import Link from "next/link";

const Sidebar = () => {
    return (
      <Fragment>
          <div className={styles.sidebar}>

              <Search />
              
              <Card className={styles.card}>
                  <h3 className={styles.title}>
                      <span>
                          <SidebarBlog />
                      </span>
                      آخرین مقالات
                  </h3>
                  <ul className={styles.list}>
                      <li className={styles.item}>
                          <Link href="/">
                              <a>
                                  آیتم اول
                              </a>
                          </Link>
                      </li>
                      <li className={styles.item}>
                          <Link href="/">
                              <a>
                                  آیتم اول
                              </a>
                          </Link>
                      </li>
                      <li className={styles.item}>
                          <Link href="/">
                              <a>
                                  آیتم اول
                              </a>
                          </Link>
                      </li>
                      <li className={styles.item}>
                          <Link href="/">
                              <a>
                                  آیتم اول
                              </a>
                          </Link>
                      </li>
                      <li className={styles.item}>
                          <Link href="/">
                              <a>
                                  آیتم اول
                              </a>
                          </Link>
                      </li>
                      <li className={styles.item}>
                          <Link href="/">
                              <a>
                                  آیتم اول
                              </a>
                          </Link>
                      </li>
                      <li className={styles.item}>
                          <Link href="/">
                              <a>
                                  آیتم اول
                              </a>
                          </Link>
                      </li>
                      <li className={styles.item}>
                          <Link href="/">
                              <a>
                                  آیتم اول
                              </a>
                          </Link>
                      </li>
                      <li className={styles.item}>
                          <Link href="/">
                              <a>
                                  آیتم اول
                              </a>
                          </Link>
                      </li>
                      <li className={styles.item}>
                          <Link href="/">
                              <a>
                                  آیتم اول
                              </a>
                          </Link>
                      </li>
                      <li className={styles.item}>
                          <Link href="/">
                              <a>
                                  آیتم اول
                              </a>
                          </Link>
                      </li>
                  </ul>
              </Card>
              <Card className={styles.card}>
                  <h3 className={styles.title}>
                      <span>
                          <SidebarBlog />
                      </span>
                      پربازدیدترین مقالات
                  </h3>
                  <ul className={styles.list}>
                      <li className={styles.item}>
                          <Link href="/">
                              <a>
                                  آیتم اول
                              </a>
                          </Link>
                      </li>
                      <li className={styles.item}>
                          <Link href="/">
                              <a>
                                  آیتم اول
                              </a>
                          </Link>
                      </li>
                      <li className={styles.item}>
                          <Link href="/">
                              <a>
                                  آیتم اول
                              </a>
                          </Link>
                      </li>
                      <li className={styles.item}>
                          <Link href="/">
                              <a>
                                  آیتم اول
                              </a>
                          </Link>
                      </li>
                      <li className={styles.item}>
                          <Link href="/">
                              <a>
                                  آیتم اول
                              </a>
                          </Link>
                      </li>
                      <li className={styles.item}>
                          <Link href="/">
                              <a>
                                  آیتم اول
                              </a>
                          </Link>
                      </li>
                      <li className={styles.item}>
                          <Link href="/">
                              <a>
                                  آیتم اول
                              </a>
                          </Link>
                      </li>
                      <li className={styles.item}>
                          <Link href="/">
                              <a>
                                  آیتم اول
                              </a>
                          </Link>
                      </li>
                      <li className={styles.item}>
                          <Link href="/">
                              <a>
                                  آیتم اول
                              </a>
                          </Link>
                      </li>
                      <li className={styles.item}>
                          <Link href="/">
                              <a>
                                  آیتم اول
                              </a>
                          </Link>
                      </li>
                      <li className={styles.item}>
                          <Link href="/">
                              <a>
                                  آیتم اول
                              </a>
                          </Link>
                      </li>
                  </ul>
              </Card>

          </div>
      </Fragment>
    );
};

export default Sidebar;