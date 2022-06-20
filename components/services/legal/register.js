import Button from "../../ui/button";
import styles from "./register.module.css";

const Register = () => {
    return (
        <div id={styles.register}>
            <div className={styles.regbody} >
                <h5>ثبت نام متقاضیان کارآفرینی و سرمایه گذاران</h5>
                <div className={styles.profile}></div>
                <div className={styles.input}>
                    <label>نام و نام خانوادگی </label>
                    <input type="text" />
                </div>
                <div className={styles.input}>
                    <label>کد ملی</label>
                    <input type="text" />
                </div>
                <div className={styles.input}>
                    <label>تلفن همراه</label>
                    <input type="text" />
                </div>
                <div className={styles.input}>
                    <label>شهر</label>
                    <input type="text" />
                </div>
                <div className={styles.input}>
                    <label>آدرس</label>
                    <input type="text" />
                </div>
                
                <div className={styles.servic}>
                    <h5>کدام خدمات حقوقی را ارائه می کنید؟</h5>
                    <div>
                        <input type="checkbox" />
                        <span>خدمات وکالت</span>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <span>مشاوره حقوقی</span>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <span>تنطیم اسناد و لوایح و قراردادها</span>
                    </div>
                </div>

                <Button>ارسال درخواست</Button>
            </div>
        </div>
    )
}

export default Register;