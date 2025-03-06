import React, { useState, useEffect } from "react";
import styles from "./Community.module.css";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router";

const Community = () => {
  const [commuList, setCommuList] = useState([]); // 상태로 관리!
  const nav = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(
          collection(db, "communityList"),
          orderBy("date", "desc")
        );
        const snapshot = await getDocs(q);
        const list = snapshot.docs.map((doc) => ({
          ...doc.data(),
        }));
        setCommuList(list); // 데이터 받아오면 상태 업데이트
      } catch (e) {
        console.error("error", e);
      }
    };

    fetchData();
  }, []);
  console.log(commuList);

  const listOnclick = (id) => {
    nav(`Detail/${id}`);
  };

  return (
    <div className={styles.wrapper}>
      <ul className={styles.commuUl}>
        {commuList.map((list) => {
          return (
            <li
              key={list.id}
              className={styles.commuList}
              onClick={() => listOnclick(list.id)}
            >
              <div className={styles.commuInfoTop}>
                <h2 className={styles.infoTitle}>{list.title}</h2>
                <span className={styles.infoLikes}>추천: {list.likeCount}</span>
              </div>
              <div className={styles.commuInfoBottom}>
                <span className={styles.infoNick}>작성자: {list.nickName}</span>
                <span className={styles.infoDate}>작성일: {list.date}</span>
                <span className={styles.infoViews}>조회: {list.viewCount}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Community;
