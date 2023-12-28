import { useEffect, useState } from "react";
import questions from "../serve/questions";
import evaluateResult from "../serve/evaluateResult";

export default function Game({ setShowResult }) {
  const [next, setNext] = useState(1);
  const [selection, setSelection] = useState([]);
  const [nextButton, setNextButton] = useState(false);

  const chooseAnswer = (e) => {
    setNextButton(true);
    removeClass();
    e.currentTarget.classList.add("active");
    let currAns = parseInt(e.currentTarget.id);
    setSelection((prev) => [...prev, currAns]);
  };

  const removeClass = () => {
    const options = document.querySelectorAll(".option");
    options.forEach((option) => {
      option.classList.remove("active");
    });
  };

  const handleClickNext = () => {
    removeClass();
    setNextButton(false);
    if (next >= questions.length) {
      setNext(1);
      const result = evaluateResult({ input: selection });
      setShowResult({
        show: true,
        result: result,
      });
    } else {
      setNext(next + 1);
    }
  };

  return (
    <div className="card">
      <div className="qst-sign">
        <div className="outer-bar">
          <div
            key={next}
            className="inner-bar"
            style={{
              "--bar-from": `${100 - ((next - 1) / questions.length) * 100}%`,
              "--bar-to": `${100 - (next / questions.length) * 100}%`,
            }}
          ></div>
        </div>
        <span>
          {next}/{questions.length}
        </span>
      </div>
      <p className="qst">{questions[next - 1].question}</p>
      <div className="option-container">
        <div onClick={chooseAnswer} id={0} className="option">
          <div className="outer-circle" data-clicked></div>
          <p>{questions[next - 1].options[0]}</p>
        </div>
        <div onClick={chooseAnswer} id={1} className="option">
          <div className="outer-circle"></div>
          {questions[next - 1].options[1]}
        </div>
        <div onClick={chooseAnswer} id={2} className="option">
          <div className="outer-circle"></div>
          {questions[next - 1].options[2]}
        </div>
        <div onClick={chooseAnswer} id={3} className="option">
          <div className="outer-circle"></div>
          {questions[next - 1].options[3]}
        </div>
        <div className="next-box">
          <button
            disabled={!nextButton}
            onClick={handleClickNext}
            className="btn"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}