
import './App.css';
import React,{useState} from 'react'
import Button from './component/Button';
import{Routes, Route} from 'react-router-dom';
import Quiz from './component/Quiz';
// import QuizChem from './component/QuizChem';
// import PhysicsQ from './component/PhysicsQ'
// import MathQ from './component/MathQ'
function App() {
  const [sub,setSub]=useState("physicsQuiz")
  return (
    <div className="App">
       <Routes>
    <Route path="/"  element={<Button setSub={setSub} sub={sub}/>}/>
    <Route path="/quiz"  element={<Quiz sub={sub}/>}/>
    {/* <Route path="/quizchem"  element={<QuizChem/>}/>
    <Route path="/MathQ"  element={<MathQ/>}/>
    <Route path="/PhysicsQ"  element={<PhysicsQ/>}/> */}

   </Routes>

    </div>
  );
}
export default App;


