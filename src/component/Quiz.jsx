// import React, { useEffect, useState } from 'react'
// import { physicsQuiz } from './PhysicsQ'
// import { mathQuiz } from './MathQ'
// import { chemistryQuiz } from './QuizChem'
// import './Quizz.css';
// export default function Quiz({sub}) {
//     const [subject,setSubject]=useState(physicsQuiz);
//     const [ind,setInd]=useState(0);

//     useEffect(()=>{
//         if(sub==="physicsQuiz"){

//             setSubject(physicsQuiz);
//         }
//         else if(sub==="mathQuiz"){
//             setSubject(mathQuiz);
//         }
//         else if(sub==="chemistryQuiz"){
//             setSubject(chemistryQuiz);
//     }
// },[])
// function handleNext(){
//     if(ind<9){
//         setInd(ind+1);
//     }
// }
// function handlePrev(){
//     if(ind>0){
//         setInd(ind-1);
//     }
// }
//   return (

//     <div className='backimage'>
        
//       <div className='quest'>{subject[ind].question}</div>
//       <div className='option'>
//         <div className='ab'>
//       <div className='optionn' >{subject[ind].options.a}</div><div className='optionn'>{subject[ind].options.b}</div></div><div className='ab'><div className='optionn'>{subject[ind].options.c}</div><div className='optionn'>{subject[ind].options.d}</div></div>
//       <button onClick={handlePrev} className='pre'>Previous</button>
//       <button onClick={handleNext} className='next'>Next</button>
//     </div>
//     </div>
//   )
// }

import React, { useEffect, useState } from 'react';
import { physicsQuiz } from './PhysicsQ';
import { mathQuiz } from './MathQ';
import { chemistryQuiz } from './QuizChem';
import './Quizz.css';

export default function Quiz({ sub }) {
    const [subject, setSubject] = useState(physicsQuiz);
    const [ind, setInd] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (sub === "physicsQuiz") {
            setSubject(physicsQuiz);
        } else if (sub === "mathQuiz") {
            setSubject(mathQuiz);
        } else if (sub === "chemistryQuiz") {
            setSubject(chemistryQuiz);
        }
    }, []);

    function handleNext() {
        if (ind < 9) {
            setInd(ind + 1);
            setSelectedOption(null); // Reset selected option when moving to the next question
        }
    }

    function handlePrev() {
        if (ind > 0) {
            setInd(ind - 1);
            setSelectedOption(null); // Reset selected option when moving to the previous question
        }
    }

    function handleOptionClick(option) {
        setSelectedOption(option);
    }

    function handleSubmit() {
        // Check if the quiz has already been submitted
        if (!submitted) {
            // Check if selectedOption matches the correct answer
            if (selectedOption === subject[ind].isCorrect) {
                // Increase score if answer is correct
                setScore(score + 2);
            }
            // Move to the next question after submitting
            if (ind < 9) {
                handleNext();
            } else {
                setSubmitted(true);
            }
        }
    }

    function renderScore() {
        if (submitted) {
            return (
                <div className="score">Your score: {score} out of 10</div>
            );
        }
        return null;
    }

    return (

        <div className='backimage'>
            <div className='scma'>
           
           
            </div>
            <div className='quest'>{ind+1}. {subject[ind].question}</div>
            <div className='option'>
                <div className='ab'>
                    <div
                        className={selectedOption === 'a' ? 'selectedOption optionn' : 'optionn'}
                        onClick={() => handleOptionClick('a')}
                    >
                        {subject[ind].options.a}
                    </div>
                    <div
                        className={selectedOption === 'b' ? 'selectedOption optionn' : 'optionn'}
                        onClick={() => handleOptionClick('b')}
                    >
                        {subject[ind].options.b}
                    </div>
                </div>
                <div className='ab'>
                    <div
                        className={selectedOption === 'c' ? 'selectedOption optionn' : 'optionn'}
                        onClick={() => handleOptionClick('c')}
                    >
                        {subject[ind].options.c}
                    </div>
                    <div
                        className={selectedOption === 'd' ? 'selectedOption optionn' : 'optionn'}
                        onClick={() => handleOptionClick('d')}
                    >
                        {subject[ind].options.d}
                    </div>
                </div>
                <button onClick={handlePrev} className='pre'>Previous</button>
                {ind < 9 ? <button onClick={handleSubmit} className='next'>Next</button> :
                    <button onClick={handleSubmit} className='next'>Submit</button>
                }
                {renderScore()}
            </div>
        </div>
    );
}

