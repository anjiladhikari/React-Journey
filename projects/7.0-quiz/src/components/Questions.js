import Options from "./Options"

export const Questions = ({ question }) => {
  return (


    <div className="options">


      <h4>{question.question} </h4>

      <Options question={question} />

    </div>

  )
}
