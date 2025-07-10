import { Footer } from "flowbite-react";
import {
  BsGithub,
  BsLinkedin,
  BsEnvelope,
  BsWhatsapp,
  BsTelegram,
} from "react-icons/bs";

import styles from "./Footer.module.css"; // Import CSS module

function FooterComponent() {
  return (
    <Footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.icons}>
          <Footer.Icon
            href="https://www.linkedin.com/in/siddiqui-zaid-546953270/"
            icon={BsLinkedin}
          />
          <Footer.Icon href="https://github.com/zaid2904" icon={BsGithub} />
          <Footer.Icon
            href="mailto:zaidsiddiqui7886@gmail.com"
            icon={BsEnvelope}
          />
          <Footer.Icon href="https://t.me/mah_moud_2003" icon={BsTelegram} />
          <Footer.Icon
            href=""
            icon={BsWhatsapp}
          />
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;