import {Fragment} from "react";
import styles from "./loan-facilities.module.css";
import Button from "../../ui/button";

const OrgForm = () => {
    return (
        <Fragment>
            <form method="post" id="org_form" className={styles.form}>

                <div className={styles.controls}>
                    <label>
                        نام شرکت یا سازمان
                    </label>
                    <input type="text"/>
                </div>
                <div className={styles.controls}>
                    <label>
                        نام مدیر عامل
                    </label>
                    <input type="date"/>
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
                        آدرس شرکت
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

export default OrgForm;