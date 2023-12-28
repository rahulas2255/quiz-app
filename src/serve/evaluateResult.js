import questions from "./questions";

export default function evaluateResult({ input }) {
  let usrResult = 0;
  let correctAns = 0;
  let total = questions.length;
  questions.forEach((question, index) => {
    const userAns = question.options[input[index]];
    if (userAns === question.answer) {
      usrResult++;
      correctAns++;
    }
  });

  return [usrResult, correctAns, total];
}