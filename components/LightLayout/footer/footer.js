import styles from './footer.module.css';
import FooterTop from "./footer-top";
import FooterContent from "./footer-content";
import FooterBottom from "./footer-bottom";

const Footer = () => {
    return (
      <div className={styles.footer}>
          <FooterTop />
          <FooterContent />
          <FooterBottom />
      </div>
    );
};

export default Footer;