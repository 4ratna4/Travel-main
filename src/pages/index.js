import React, { useState, useEffect } from "react";
import axios from "axios";
import QuestionCard from "../components/questionCard/QuestionCard";
import styles from "./styles.module.css"
import Navbar from "../components/navbar/Navbar";

const MainPage = () => {
  const [questions, setQuestions] = useState([]);

  const fetchAllQuestions = async ()=>{

    const response = await axios.get ("http://localhost:8082/questions");
    console.log(`response`, response.data.questions);
    setQuestions (response.data.questions)
  };

  useEffect (() => {
    fetchAllQuestions();
  }, []);
  console.log(questions)

  return (
    <div>
      <Navbar />
    <div className={styles.questionWrapper}>
      <div className={styles.question}>
      {questions.map((question)=> (
      <QuestionCard 
      id={question._id}
      questionText={question.questionText}/>
      ))}
      </div>
    </div>
    </div>
  );
};

export default MainPage;
