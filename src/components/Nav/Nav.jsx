import React from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.wrapper}>
      <a href="/">HOME</a>
      <a href="/">글 목록</a>
      <a href="/">글 작성</a>
    </div>
  );
};

export default Nav;
