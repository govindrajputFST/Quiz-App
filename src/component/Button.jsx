import React, { useState } from 'react'
import style from './Button.module.css'
import {useNavigate} from 'react-router-dom'
export default function Button({setSub}) {
    const navigate=useNavigate();
    


    function handleClick(){
        navigate('/quiz')
    }
    function handleChange(e){
        e.preventDefault();
        setSub(e.target.value);
    }
  return (
    <div>
            <h1>WelCome To The Quiz  App !  </h1>
        <div className={style.landingbox}>
            <div className={style.formbox}>
            <label htmlFor="namee">Name : </label> 
            <input type="text" id='namee'placeholder='Enter Your Name'   className={style.inputbox} required />
            <br />
            <label for="Sub">Select Subject : </label> 

<select name="Subject" id="Sub" className={style.selectlist} required onChange={handleChange}>
<option value="">select</option>
  <option value='physicsQuiz'>Physics</option>
  <option value='mathQuiz'>Math</option>
  <option value='chemistryQuiz'>Chemistry</option>
</select>
            <br />
      <button  type='submit' className={style.buttonn} onClick={handleClick}> Go To The Test Screen </button>
      </div>
    </div>
    </div>
  )

}

