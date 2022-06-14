import styles from './footer-content.module.css';
import Link from "next/link";
import MailLetter from "../../icons/mail-letter";
import {getAllSocial} from "../../../data/social";

const FooterContent = () => {

    const socials = getAllSocial();

    return (
      <div className={styles.content}>

          <div style={{width: "10%"}} className={styles.col}>
              <h2 className={styles.title}>
                  دسترسی سریع
              </h2>
              <ul>
                  <li>
                      <Link href="/">
                          <a>
                              صفحه اصلی
                          </a>
                      </Link>
                  </li>
                  <li>
                      <Link href="/">
                          <a>
                              صفحه اصلی
                          </a>
                      </Link>
                  </li>
                  <li>
                      <Link href="/">
                          <a>
                              صفحه اصلی
                          </a>
                      </Link>
                  </li>
                  <li>
                      <Link href="/">
                          <a>
                              صفحه اصلی
                          </a>
                      </Link>
                  </li>
              </ul>
          </div>

          <div style={{width: "20%"}} className={styles.col}>
              <h2 className={styles.title}>
                  خدمات بیرق
              </h2>
              <ul className={styles.list}>
                  <li>
                      <Link href="/">
                          <a>
                              صفحه اصلی
                          </a>
                      </Link>
                  </li>
                  <li>
                      <Link href="/">
                          <a>
                              صفحه اصلی
                          </a>
                      </Link>
                  </li>
                  <li>
                      <Link href="/">
                          <a>
                              صفحه اصلی
                          </a>
                      </Link>
                  </li>
                  <li>
                      <Link href="/">
                          <a>
                              صفحه اصلی
                          </a>
                      </Link>
                  </li>
                  <li>
                      <Link href="/">
                          <a>
                              صفحه اصلی
                          </a>
                      </Link>
                  </li>
                  <li>
                      <Link href="/">
                          <a>
                              صفحه اصلی
                          </a>
                      </Link>
                  </li>
                  <li>
                      <Link href="/">
                          <a>
                              صفحه اصلی
                          </a>
                      </Link>
                  </li>
                  <li>
                      <Link href="/">
                          <a>
                              صفحه اصلی
                          </a>
                      </Link>
                  </li>
              </ul>
          </div>

          <div style={{width: '40%'}} className={styles.col}>
              <h2 className={styles.title}>
                  سامانه جامع خدمات الکترونیکی
              </h2>
              <p className={styles.desc}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآن چنان که لازم است و برای  شرایط  فعلی تکنولوژی  مورد نیاز و کاربرد های متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </p>
          </div>

          <div style={{width: '30%'}} className={styles.col}>
              <h2 className={styles.title}>
                  راه های ارتباطی
              </h2>
              <p className={styles.desc}>
                  جهت اطلاع از جدیدترین اخبار، مقالات و رویداد ها، بیرق را از روش های زیر دنبال کنید
              </p>
              <div className={styles.control}>
                  <input type="email" placeholder="ایمیل خود را وارد کنید..."/>
                  <button>
                      <MailLetter />
                      ارسال
                  </button>
              </div>
              <ul className={styles.socials}>
                  {socials.map((social) => (
                      <li key={social.id}>
                          <a href={social.link}>
                              {social.icon}
                          </a>
                      </li>
                  ))}
              </ul>
          </div>

      </div>
    );
};

export default FooterContent;