import React from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className={styles.border}>
      <div className={styles.wrapper}>
        <Link to="/">글 목록</Link>
        <Link to="/Write">글 작성</Link>
      </div>
    </div>
  );
};

export default Nav;
