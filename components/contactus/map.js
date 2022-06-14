import styles from "./map.module.css";

const Map = () => {
    return (
        <div className={styles.map}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207371.97794584828!2d51.48990346889208!3d35.69701178595626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0710d5918403%3A0x74f5290b67841378!2z2KjYsdisINmF24zZhNin2K_igI4!5e0!3m2!1sfa!2s!4v1650011426548!5m2!1sfa!2s"
                width="1440" height="600" allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
};

export default Map;