import React, { useState } from "react";
import styles from "./Write.module.css";
import { getTimeUtil } from "../utils/getTime";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router";

const Write = () => {
  const initialWrite = {
    id: "",
    title: "",
    nickName: "",
    password: "",
    password2: "",
    desc: "",
    date: "",
    likeCount: 0,
    viewCount: 0,
  };
  const [write, setWrite] = useState(initialWrite);
  const nav = useNavigate();

  const addWrite = async (newWrite) => {
    try {
      const doc = await addDoc(collection(db, "communityList"), newWrite);
      console.log("doc id", doc.id);
    } catch (e) {
      console.log(error), e;
    }
  };

  const passwordConfirm = () => {
    if (write.password.length < 4) {
      alert("비밀번호를 4글자 이상 입력해 주세요.");
      return false;
    }
    if (write.password !== write.password2) {
      alert("비밀번호가 일치하지 않습니다.");
      return false;
    }
  };

  const handelOnChange = (e) => {
    setWrite({
      ...write,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    passwordConfirm();
    console.log("12");
    const ranId = new Date().getTime().toString();
    const newWrite = {
      ...write,
      id: ranId,
      date: getTimeUtil(),
    };
    addWrite(newWrite);
    setWrite(initialWrite);
    nav("/");
  };
  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          <label htmlFor="title">제목을 입력해 주세요.</label>
          <input
            type="text"
            name="title"
            value={write.title}
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
            value={write.nickName}
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
            value={write.password}
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
            value={write.password2}
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
        value={write.desc}
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
