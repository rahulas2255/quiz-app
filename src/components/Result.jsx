export default function Result({ setShowResult, result }) {
    const [usrResult, correctAns, total] = [...result];
  
    const playAgain = () => {
      setShowResult({
        show: false,
        result: {},
      });
    };
  
    return (
      <div className="card text-center">
        <div className="circle">
          <h1>
            {usrResult}
            <span
              style={{
                fontSize: "1.8rem",
              }}
            >
              /{total}
            </span>
          </h1>
        </div>
        <ul role="list">
          <li>
            Total questions: <span className="ml-auto">{total}</span>
          </li>
          <li>
            Correct answers: <span className="ml-auto">{correctAns}</span>
          </li>
        </ul>
        <div>
          <button onClick={playAgain} className="btn">
            Play again
          </button>
        </div>
      </div>
    );
  }