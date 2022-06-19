import {Fragment} from "react";
import styles from './location.module.css';

const Location = (props) => {

    const {location} = props;

    return (
        <Fragment>
            <div className={styles.location}>
                <p>
                    <Location />
                    {location}
                </p>
            </div>
        </Fragment>
    )
};

export default Location;