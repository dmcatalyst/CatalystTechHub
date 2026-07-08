import React from "react";
import Contact from "../../sections/Contact/Contact";
import styles from "./ContactPage.module.css";

function ContactPage({ navigate }) {
  return (
    <div className={styles.contactPage}>
      <Contact navigate={navigate} />
    </div>
  );
}

export default ContactPage;
