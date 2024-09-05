"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { quizlist } from "../quizes";
import ActionButtons from "./ActionButtons";
import { AddQuizForm } from "./AddQuiz";
import AdminQuizCard from "./AdminQuizCard";
import UserQuizCard from "./UserQuizCard";

export default function QuizList({ session }) {
  // state values
  const [allquizes, setAllQuizes] = useState(quizlist);
  const [editObj, setEditObj] = useState({});

  // Functions
  const handleDelete = (id) => {
    const updatedQuiz = allquizes.filter((quiz) => quiz.quiz_id !== id);
    setAllQuizes(updatedQuiz);
  };

  const submitForm = (values, mode) => {
    if (mode === "edit") {
      setAllQuizes(
        allquizes.map((quiz) =>
          quiz.quiz_id === values.quiz_id ? values : quiz
        )
      );
      toast.success("Quiz Updated Successfully");
      setEditObj({});
    } else {
      setAllQuizes([
        ...allquizes,
        {
          quiz_id: values.quiz_id,
          title: values.title,
          optionA: values.optionA,
          optionB: values.optionB,
          optionC: values.optionC,
          optionD: values.optionD,
        },
      ]);
      toast.success("Quiz Added Successfully");
    }
  };

  const handleEdit = (id) => {
    const findOne = allquizes.find((item) => item.quiz_id === id);
    setEditObj(findOne);
  };

  return (
    <>
      <div className=" p-5 sm:p-10 flex flex-col 1140:flex-row justify-center gap-5 w-full mx-auto">
        <div className=" order-2 1140:order-1 flex gap-3">
          <div className="space-y-6 w-full  ">
            {allquizes.map((quiz) => {
              return (
                <div
                  key={quiz.quiz_id}
                  className="bg-gray-50 shadow-md p-4 lg:p-6 rounded-md border"
                >
                  <h2 className="mb-3">{quiz.title}</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {session?.user?.role === "user" ? (
                      <UserQuizCard quiz={quiz} />
                    ) : (
                      <AdminQuizCard quiz={quiz} />
                    )}
                  </div>

                  {session?.user?.role === "admin" && (
                    <ActionButtons
                      quiz={quiz}
                      handleEdit={handleEdit}
                      handleDelete={handleDelete}
                    />
                  )}
                </div>
              );
            })}
            {session?.user?.role === "user" && (
              <Button type="submit">Submit</Button>
            )}
          </div>
        </div>

        {session?.user?.role === "admin" && (
          // <div className="order-1 1140:order-2 h-full">
              <AddQuizForm submitForm={submitForm} editObj={editObj} />
          // </div>
        
        )}
      </div>
    </>
  );
}
