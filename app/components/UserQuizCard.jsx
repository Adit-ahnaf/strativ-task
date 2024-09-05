export default function UserQuizCard({quiz}){
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {["optionA", "optionB", "optionC", "optionD"].map(
          (optionKey) => (
            <div key={optionKey}>
              <input
                type="radio"
                id={`${optionKey}-${quiz.quiz_id}`}
                name={`quiz-${quiz.quiz_id}`}
                value={quiz[optionKey]?.label}
              />
              <label
                className="ml-3"
                htmlFor={`${optionKey}-${quiz.quiz_id}`}
              >
                {quiz[optionKey]?.label}
              </label>
            </div>
          )
        )}
      </div>
    );
}