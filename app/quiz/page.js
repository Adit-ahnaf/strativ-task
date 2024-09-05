import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Navbar from "../components/Navbar";
import QuizList from "../components/QuizList";

export default async function QuizPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <>
      <Navbar session={session} />
      <QuizList session={session} />
    </>
  );
}
