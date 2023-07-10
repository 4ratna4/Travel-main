import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";


const Question =({questionText, id}) => {
   return (
    <>
    <Link className={styles.link} href={`/question/${id}/answers`}>
   <div className={styles.questionWrapper}>
    <h1 className={styles.question}>{questionText}</h1>
    </div>
   </Link>
   </>
   ); 
};
export default Question