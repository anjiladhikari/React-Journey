import Options from "./Options"

export const Questions = ({ question,dispatch,answer }) => {
  return (


    <div className="options">


      <h4>{question.question} </h4>

      <Options question={question} dispatch={dispatch} answer={answer} />

    </div>

  )
}
