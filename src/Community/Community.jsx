import React from "react";
import styles from "./Community.module.css";

const Community = () => {
  const commuList = [
    {
      id: "123123",
      title: "제목",
      nickName: "닉네임",
      date: "25.3.5 12시 39분",
      likeCount: "5",
      viewCount: "20",
    },
    {
      id: "12432",
      title: "제목2",
      nickName: "닉네임2",
      date: "25.3.5 12시 6분",
      likeCount: "55",
      viewCount: "240",
    },
    {
      id: "321412",
      title: "제목3",
      nickName: "닉네임ㄴㄴ",
      date: "25.3.5 19시 39분",
      likeCount: "50",
      viewCount: "220",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <ul className={styles.commuUl}>
        {commuList.map((list) => {
          return (
            <li key={commuList.id} className={styles.commuList}>
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
