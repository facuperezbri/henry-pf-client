import React,{useState} from 'react'
import FlasCard from './FlasCard';
export default function Quiz(props) {
   
    const [questionIndex, setQuestionIndex] = useState(0);

    const incrementIndex= ()=> setQuestionIndex(questionIndex + 1);

    const currentQuestion = props.questions[questionIndex];

    if(!currentQuestion){
        return <div style={{display:"flex", justifyContent:"center", fontWeight:"700",fontSize:"1.5rem"}}><p>no more questions</p></div> 
    }
  return (
    <div>
        <FlasCard
        question={currentQuestion.question}
        answer={currentQuestion.answer}
        incrementIndex={incrementIndex}
        />
    </div>
  )
}