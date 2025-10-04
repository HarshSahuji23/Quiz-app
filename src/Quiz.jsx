import React, { useState } from "react";
import questions from "./Question";

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  // ✅ single handleAnswer function
  const handleAnswer = (option) => {
    setUserAnswers([...userAnswers, option]);

    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowResult(true);
    }
  };

  // ✅ JSX return must be at component level
  return (
    <div className="quiz">
      {showResult ? (
        <div>
          {score === questions.length && (
            <h2 style={{ color: "green" }}>🎉 Congratulations! You got all answers correct! 🎉</h2>
          )}
          <h2>Quiz Finished!</h2>
          <p>Your Score: {score}/{questions.length}</p>

          <h3>Review Answers:</h3>
          {questions.map((q, index) => (
            <div key={index} style={{ marginBottom: '15px', textAlign: 'left' }}>
              <p><strong>Q{index + 1}:</strong> {q.question}</p>
              <p><strong>Your Answer:</strong> {userAnswers[index]}</p>
              <p><strong>Correct Answer:</strong> {q.answer}</p>
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>{current + 1}/{questions.length} Question</p>
          <hr />
          <h2>{questions[current].question}</h2>

          {questions[current].options.map((option, index) => (
            <button
              className="buttons"
              key={index}
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Quiz;