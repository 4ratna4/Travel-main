import React, { useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import Navbar from "@/components/navbar/Navbar";
import { useRouter } from "next/router";
useRouter


const InsertQuestion = () => {

  const router = useRouter();

const [question, setQuestion] = useState("")

const addNewQuestion = async ()=>{
const response = await axios.post("http://localhost:8082/questions",
{ Question: question }
);
console.log("response", response);
router.push("/");
}

  return (
  <div>
     <Navbar />
    <div className={styles.questionForm} >
      <input value={question} onChange={(question)=>setQuestion(question.target.value)} placeholder="Question"/>

      <button onClick={()=>addNewQuestion()}>Insert Question</button>
    </div>
  </div>
  );
};
       
export default InsertQuestion;