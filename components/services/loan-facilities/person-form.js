import {Fragment} from "react";
import styles from "./loan-facilities.module.css";
import Button from "../../ui/button";

const PersonForm = () => {
    return (
        <Fragment>
            <form method="post" id="person_form" className={styles.form}>

                <div className={styles.controls}>
                    <label>
                        نام و نام خانوادگی
                    </label>
                    <input type="text"/>
                </div>
                <div className={styles.controls}>
                    <label>
                        تاریخ تولد
                    </label>
                    <input type="date"/>
                </div>
                <div className={styles.controls}>
                    <label>
                        کد ملی
                    </label>
                    <input type="number"/>
                </div>
                <div className={styles.controls}>
                    <label>
                        نام پدر
                    </label>
                    <input type="text"/>
                </div>
                <div className={styles.controls}>
                    <label>
                        استان - شهر
                    </label>
                    <select>
                        <option value="1">
                            تهران
                        </option>
                        <option value="2">
                            آذربایجان شرقی
                        </option>
                        <option value="3">
                            آذربایجان غربی
                        </option>
                    </select>
                </div>
                <div className={styles.controls}>
                    <label>
                        آدرس محل سکونت
                    </label>
                    <input type="text"/>
                </div>
                <div className={styles.controls}>
                    <label>
                        علت درخواست وام
                    </label>
                    <textarea>

                                        </textarea>
                </div>
                <div className={styles.controls}>
                    <label>
                        مبلغ درخواستی وام (تومان)
                    </label>
                    <input type="text"/>
                </div>

                <Button>
                    ثبت درخواست
                </Button>
            </form>
        </Fragment>
    )
};

export default PersonForm;