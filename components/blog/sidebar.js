import {Fragment} from "react";
import styles from "./sidebar.module.css";
import Card from "../ui/card";
import SearchSidebar from "../icons/search-sidebar";
import Search from "./search";
import SidebarBlog from "../icons/sidebar-blog";
import Link from "next/link";
import { connect } from "react-redux";

const Sidebar = ({list}) => {
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
                  {
                         list?.map((itm) => (
                            <li className={styles.item} key={`BLOG_POST_LAST__${itm.id}`}>
                            <Link href={`/blog/${itm.id}`}>
                                <a>
                                    {itm.title}
                                </a>
                            </Link>
                        </li>
                         ))
                     }
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
                     {
                         list?.map((itm) => (
                            <li className={styles.item} key={`BLOG_POST_MOST_VIEWED__${itm.id}`}>
                            <Link href={`/blog/${itm.id}`}>
                                <a>
                                    {itm.title}
                                </a>
                            </Link>
                        </li>
                         ))
                     }
                     
                  </ul>
              </Card>

          </div>
      </Fragment>
    );
};
const mapStateToProps = state => ({
    list:state.blogReducer.list
})
export default connect(mapStateToProps)(Sidebar);