import { Button } from '@tremor/react'
import React from 'react'
import { Question } from './Question'

export const QuizGamePage = () => {

    const ques = {
        statement: "this is a ques",
        option1 : "option 1",
        option2 : "option 1",
        option3 : "option 1",
        option4 : "option 1",
    }
  return (
    <div className="page-title-section section">
    <div className="container">
        <Question ques={ques} />
        <Button
      size="md"
      marginTop="mt-3"
      importance="primary"
      text="Play Quiz"
      className="center"
      handleClick={() => console.log("clicked")}
    />
    </div>
    </div>
  )
}
