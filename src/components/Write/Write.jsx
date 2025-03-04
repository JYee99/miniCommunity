import React, { useState } from "react";
import styles from "./Write.module.css";

const Write = () => {
  const [write, setWrite] = useState({
    id: "",
    title: "",
    nickName: "",
    password: "",
    password2: "",
    desc: "",
  });
  const passwordConfirm = () => {
    if (write.password.length < 4) {
      alert("비밀번호를 4글자 이상 입력해 주세요.");
      return;
    }
    if (write.password !== write.password2) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
  };

  const handelOnChange = (e) => {
    setWrite({
      ...write,
      [e.target.name]: e.target.value,
    });
    console.log(write);
  };
  const handleSubmit = (e) => {
    passwordConfirm();
    const ranId = new Date().getTime().toString();
    e.preventDefault();
    setWrite({
      ...write,
      id: ranId,
    });
    console.log(write);
  };
  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          <label htmlFor="title">제목을 입력해 주세요.</label>
          <input
            type="text"
            name="title"
            id={styles.writeTitle}
            required
            onChange={handelOnChange}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="nickName">닉네임을 입력해 주세요.</label>
          <input
            type="text"
            name="nickName"
            id={styles.writeName}
            required
            onChange={handelOnChange}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="password">비밀번호를 입력해 주세요.</label>
          <input
            type="password"
            name="password"
            id={styles.writePasswrd}
            required
            onChange={handelOnChange}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="password2">비밀번호를 입력해 주세요.</label>
          <input
            type="password"
            name="password2"
            id={styles.writePasswrd2}
            required
            onChange={handelOnChange}
          />
        </div>
      </div>
      <label htmlFor="desc">내용을 입력해 주세요.</label>
      <textarea
        name="desc"
        id={styles.desc}
        required
        onChange={handelOnChange}
      ></textarea>
      <div className={styles.btnWrapper}>
        <button>작성하기</button>
      </div>
    </form>
  );
};

export default Write;
