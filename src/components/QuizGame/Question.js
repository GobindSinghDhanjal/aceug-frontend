import React from 'react'

export const Question = ({ques}) => {

  return (
    <div className="container ">
        <div className="row">
            <div className="col-3">

            </div>
            <div className="col-6 ">
            <h1>{ques.statement}</h1>
            
            <input type="radio" value={ques.option1} name="option1"/>
            <label htmlFor="option1">{ques.option1}</label>
            <br />

            <input type="radio" value={ques.option2} name={ques.option2}/>{ques.option2}
            <br />

            <input type="radio" value={ques.option3} name={ques.option3}/>{ques.option3}
            <br />

            <input type="radio" value={ques.option4} name={ques.option4}/>{ques.option4}
            </div>
            <div className="col-3"></div>
        </div>
    </div>
  )
}
