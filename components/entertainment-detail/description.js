import {Fragment} from "react";
import styles from './description.module.css';
import Card from "../ui/card";
import EmptyStar from "../icons/empty-star";

const Description = (props) => {

    const {content} = props;

    return (
        <Card className={styles.content}>
            <div className={styles.vote}>
                <p>
                    توضیحات
                </p>
                <ul>
                    <span>
                        0 رای
                    </span>
                    <li>
                        <EmptyStar />
                    </li>
                    <li>
                        <EmptyStar />
                    </li>
                    <li>
                        <EmptyStar />
                    </li>
                    <li>
                        <EmptyStar />
                    </li>
                    <li>
                        <EmptyStar />
                    </li>
                </ul>
            </div>
            <p>
                {content}
            </p>
        </Card>
    )
};

export default Description;