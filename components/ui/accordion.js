import {Fragment, useState} from "react";
import styles from './accordion.module.css';
import OpenArrow from "../icons/open-arrow";
import PlusToggle from "../icons/plus-toggle";

const Accordion = (props) => {

    const {id, title, desc} = props;

    const [active, setActive] = useState(null);

    const toggle = (id) => {
        if (active === id) {
            return setActive(null);
        }
        setActive(id);
    }

    return (
        <Fragment>
            <div className={`${styles['accordion-wrapper']} ${active === (id) ? 'accordion-bg' : 'accordion-closed'}`}>
                <div onClick={() => {
                    toggle(id)
                }} className={`${styles['accordion-title']} ${active === (id) ? 'active' : ''}`}>
                    <h2>
                        {title}
                    </h2>
                    <span>
                        {active === (id) ?
                            <OpenArrow />
                        :
                            <PlusToggle />
                        }
                    </span>
                </div>
                <div className={`accordion-open ${styles['accordion-desc']} ${active === (id) ? 'active' : ''}`}>
                    <p>
                        {desc}
                    </p>
                </div>
            </div>
        </Fragment>
    )
};

export default Accordion;