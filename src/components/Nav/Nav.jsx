import React from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.border}>
      <div className={styles.wrapper}>
        <a href="/">HOME</a>
        <a href="/Community">글 목록</a>
        <a href="/Write">글 작성</a>
      </div>
    </div>
  );
};

export default Nav;
