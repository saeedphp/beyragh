import {Fragment, useState} from "react";
import styles from './search.module.css';

const Search = (props) => {

    const [inputText, setInputText] = useState("");

    const onChange = (event) => {
        setInputText(event.target.value);
    };

    return (
        <Fragment>
            <input type="text" placeholder="جستجو مکان مورد نطر ..." value={inputText} onChange={onChange} />
        </Fragment>
    )
};

export default Search;