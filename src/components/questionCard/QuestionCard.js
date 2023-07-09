import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";


const Question =({questionText, id}) => {
   return (
    <>
    <Link href={`/question/${id}/answers`}>
   <div><h1>{questionText}</h1></div>
   </Link>
   </>
   ); 
};
export default Question