import React,{useEffect, useState} from 'react'

export default function FlasCard({question,answer,incrementIndex}) {
    const [showAnswer,setShowAnswer] = useState(false);

    useEffect(()=> setShowAnswer(false),[question]);
  return (
    <div>
            <div style={{backgroundColor:"black", color:"white", padding:"2px",border:"2px solid black",borderRadius:"8px",cursor:"pointer" }}onClick={()=> setShowAnswer(!showAnswer)}>

                {!showAnswer && question}
                {showAnswer && answer}

            </div>
            {showAnswer && (
                <button style={{padding:"4px",borderRadius:"8px"}} onClick={incrementIndex}>
                    proxima pregunta
                </button>
            )}
    </div>
  )
}
