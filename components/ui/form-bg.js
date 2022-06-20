import {Fragment} from "react";
import styles from './form-bg.module.css';

const FormBg = (props) => {

    const classes = ' ' + props.className;

    return (
        <Fragment>
            <div className={`${styles.form} ${classes}`}>
                {props.children}
            </div>
        </Fragment>
    );
}

export default FormBg;