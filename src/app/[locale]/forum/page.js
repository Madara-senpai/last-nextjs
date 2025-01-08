'use client';
import { useState } from 'react';

const Forum = () => {
  // Hardcoded user info (replace with real user data from authentication system)
  const currentUser = { name: 'John Doe' };

  // State to hold questions and answers
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  // Handle new question submission
  const handleAskQuestion = () => {
    if (newQuestion.trim()) {
      setQuestions([
        ...questions,
        {
          id: Date.now(),
          question: newQuestion,
          askedBy: currentUser.name,
          askedAt: new Date().toLocaleString(),
          answers: [],
        },
      ]);
      setNewQuestion('');
    }
  };

  // Handle new answer submission
  const handleAnswerSubmit = (questionId) => {
    if (newAnswer.trim()) {
      const updatedQuestions = questions.map((q) => {
        if (q.id === questionId) {
          return {
            ...q,
            answers: [
              ...q.answers,
              {
                answer: newAnswer,
                answeredBy: currentUser.name,
                answeredAt: new Date().toLocaleString(),
              },
            ],
          };
        }
        return q;
      });
      setQuestions(updatedQuestions);
      setNewAnswer('');
    }
  };

  return (
    <div className="p-6 container mx-auto px-20">
      <h1 className="text-3xl font-semibold text-center mb-6">Forum</h1>

      {/* Ask Question Section */}
      <div className="mb-6">
        <textarea
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          placeholder="Ask your question here..."
          className="w-full p-4 border rounded-md shadow-md"
        />
        <button
          onClick={handleAskQuestion}
          className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Ask Question
        </button>
      </div>

      {/* Display Questions */}
      <div>
        {questions.length === 0 ? (
          <p>No questions yet. Be the first to ask!</p>
        ) : (
          questions.map((question) => (
            <div key={question.id} className="border p-4 mb-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">{question.question}</h2>
              <p className="text-gray-500 text-sm">
                Asked by <strong>{question.askedBy}</strong> on{' '}
                <em>{question.askedAt}</em>
              </p>

              {/* Comment Section for Answers */}
              <div className="mt-4">
                <textarea
                  value={newAnswer}
                  onChange={(e) => setNewAnswer(e.target.value)}
                  placeholder="Write your answer here..."
                  className="w-full p-4 border rounded-md shadow-md mb-4"
                />
                <button
                  onClick={() => handleAnswerSubmit(question.id)}
                  className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-200"
                >
                  Submit Answer
                </button>
              </div>

              {/* Display Answers */}
              <div className="mt-4">
                {question.answers.length === 0 ? (
                  <p>No answers yet. Be the first to answer!</p>
                ) : (
                  question.answers.map((answer, index) => (
                    <div key={index} className="border p-4 mb-4 rounded-md shadow-md bg-gray-100">
                      <p>{answer.answer}</p>
                      <p className="text-gray-500 text-sm">
                        Answered by <strong>{answer.answeredBy}</strong> on{' '}
                        <em>{answer.answeredAt}</em>
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Forum;
