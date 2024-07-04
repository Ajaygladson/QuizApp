import './Quiz.css'
import React, { useRef, useState } from "react"
import { data } from '../Assets/data';
function Quiz()
{
  let[index,setindex]=useState(0);
  let[question,setquestion]=useState(data[index]);
  let [lock,setlock]=useState(false);
  let [attend,setattend]=useState(false);
  let [result,setresult]=useState(false);
  let [score,setscore]=useState(0);
  let Option1=useRef(null);// means Option1={current:null}//useRef hook
  let Option2=useRef(null);
  let Option3=useRef(null);
  let Option4=useRef(null);
  const optionarray=[Option1,Option2,Option3,Option4];
  
  
  function answercheck(e,ans)
  {
    
    if(lock===false)
      {
        if(question.ans===ans)
          {
           e.target.classList.add("correct");
           setlock(true); 
           setscore(prev=>prev+1);  
          }
        else
         {
            e.target.classList.add("incorrect")
            setlock(true);
            optionarray[question.ans-1].current.classList.add("correct");
         }
         
      }
      setattend(true);
      
  }

  function nextquestion()
  {
    if(attend)
 {
    if(index===data.length-1)
      {
        setresult(true);
        return 0;
      }
    else{
    setindex(++index);//First Increments and return the value that is index+1
    setquestion(data[index]);
    optionarray.map(
      (e)=>
        {
          e.current.classList.remove("correct");
          e.current.classList.remove("incorrect");
          return null;
        }
    );}
    setattend(false);
    setlock(false);
 } 
}

function reset()
{ 
  setresult(false);
  setindex(0);
  setquestion(data[0]);
  setscore(0);
  setattend(false);
  setlock(false);
}

return(
   
    <div className='container'>
      <h1>Quiz App</h1>
      <hr/>
      {result?<><h1>Finished</h1><h2>Your score:{score}</h2><button onClick={reset}>Reset</button></>:
      <>
      <h2>{index+1}. {question.question}</h2>
      <ul>
       <li ref={Option1} onClick={(e)=>answercheck(e,1)}>{question.option1}</li>  
       <li ref={Option2} onClick={(e)=>answercheck(e,2)}>{question.option2}</li>
       <li ref={Option3} onClick={(e)=>answercheck(e,3)}>{question.option3}</li>
       <li ref={Option4} onClick={(e)=>answercheck(e,4)}>{question.option4}</li>
      </ul>    
      <button onClick={nextquestion}>Submit</button>
      <p>Question {index+1} of {data.length}</p>
      </>
      }
     
    </div>
  )
}

export default Quiz;