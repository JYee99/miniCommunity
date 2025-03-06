import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import styles from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      // 'communityList' 컬렉션에서 id 값이 일치하는 문서 찾기
      const q = query(collection(db, "communityList"), where("id", "==", id)); // 'id' 필드를 기준으로 쿼리

      try {
        // 쿼리 실행
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          // 쿼리 결과가 비어있지 않으면 첫 번째 문서 데이터 설정
          const docData = querySnapshot.docs[0].data();
          setData(docData);
        } else {
          console.log("No matching documents found!");
        }
      } catch (error) {
        console.log("Error getting documents:", error);
      }
    };

    fetchData();
  }, [id]); // id 값이 변경될 때마다 데이터를 다시 가져옴
  console.log();

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <h2 className={styles.infoTitle}>{data?.title}</h2>
        <div className={styles.infoRight}>
          <span className={styles.views}>{data?.viewCount}</span>
          <span className={styles.date}>{data?.date}</span>
        </div>
        <div className={styles.infoDesc}>{data?.desc}</div>
      </div>
      <button className={styles.likeBtn}>{data?.likeCount}</button>
    </div>
  );
};

export default Detail;
