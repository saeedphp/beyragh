import styles from "./faq-item.module.css";
import Accordion from "../ui/accordion";

const FaqItem = (props) => {

    const {id, title, desc} = props;

    return (
        <li className={styles.items}>
            <Accordion
                id={id}
                title={title}
                desc={desc}
            />
        </li>
    );
};

export default FaqItem;