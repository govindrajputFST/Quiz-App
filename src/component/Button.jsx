import React, { useState } from 'react'
import style from './Button.module.css'
import { useNavigate } from 'react-router-dom'
export default function Button({ setSub }) {
    const navigate = useNavigate();



    function handleClick() {
        navigate('/quiz')
    }
    function handleChange(e) {
        e.preventDefault();
        setSub(e.target.value);
    }
    return (
        <div>
            <h1>WelCome To The Quiz  App !  </h1>
            <div className={style.landingbox}>
                <div className={style.formbox}>
                    <form onSubmit={handleClick}>
                        <label htmlFor="namee">Name : </label>
                        <input type="text" id='namee' placeholder='Enter Your Name' className={style.inputbox} required={true} />
                        <br />
                        <br />
                        <label for="Sub"> Subject : </label>

                        <select name="Subject" id="Sub" className={style.selectlist} onChange={handleChange}>
                            <option value="">Choose Subject</option>
                            <option value='physicsQuiz'>Physics</option>
                            <option value='mathQuiz'>Math</option>
                            <option value='chemistryQuiz'>Chemistry</option>
                        </select>
                        <br />
                        <br />
                        <label htmlFor="date">Date : </label>
                        <input type="date" id='date' className={style.inputboxx} />
                        <br />
                        <button type='submit' className={style.buttonn}> Go To The Test Screen </button>
                    </form>
                </div>
            </div>
        </div>
    )

}

