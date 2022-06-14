import styles from "./insurance-item.module.css";
import Image from "next/image";
import Card from "../ui/card";
import ItemBtn from "../ui/item-btn";

const InsuranceItem = (props) => {

    const {icon, title, description, link} = props;

    return (
        <li className={styles.items}>
            <div className={styles.imgWrapper}>
                <Image src={`/${icon}`} alt={title} layout={"fill"} />
            </div>
            <Card className={styles.wrapper}>
                <h3 className={styles.titleCard}>
                    {title}
                </h3>
                <p className={styles.desc}>
                    {description}
                </p>
                <ItemBtn href={link}>
                    فرم درخواست بیمه
                </ItemBtn>
            </Card>
        </li>
    );
};

export default InsuranceItem;