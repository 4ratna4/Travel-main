import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const QA = () => {
const router = useRouter();
console.log("1", router.query);
    const fetchQuestionAnswers = async ()=>{
console.log("2", router.query.id)
        const response = await axios.post(`http://localhost:8082/question/${router.query.id}/answers`);

        console.log("response", response);
    };

    useEffect(()=>{
        router.query.id && fetchQuestionAnswers();
    }, [router.query.id])

    return(
        <div>QA</div>
    )
};
  
export default QA