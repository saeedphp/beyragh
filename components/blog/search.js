import styles from "./search.module.css";
import SearchSidebar from "../icons/search-sidebar";
import Card from "../ui/card";

const Search = () => {
    return (
        <Card>
                  <span className={styles.divider}>
                  </span>
            <div className={styles.search}>
                <input name="search" type="text" placeholder="جستجو در مقالات  ..."/>
                <span>
                          <SearchSidebar />
                      </span>
            </div>
        </Card>
    );
};

export default Search;