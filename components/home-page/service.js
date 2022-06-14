import styles from './service.module.css';
import Card from "../ui/card";
import Image from "next/image";
import {getAllServices} from "../../data/service-index";
import Link from "next/link";

const Service = () => {

    const serviceItems = getAllServices();

    return (
      <section className={styles.service}>
          {serviceItems.map((serviceItem) => (
              <Link key={serviceItem.id} href={`/${serviceItem.link}`}>
                  <a>
                      <Card className={styles.items}>
                          <Image src={`/${serviceItem.icon}`} alt="image" layout={"fill"} />
                          <h3 className={styles.title}>
                              {serviceItem.title}
                          </h3>
                      </Card>
                  </a>
              </Link>
          ))}
      </section>
    );
};

export default Service;