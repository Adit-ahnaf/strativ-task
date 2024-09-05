import { cn } from "@/lib/utils";
import { Circle, CircleCheck } from "lucide-react";
export default function AdminQuizCard({quiz}){
    return (
        <>
        {["optionA", "optionB", "optionC", "optionD"].map(
          (optionKey) => (
            <div
              key={optionKey}
              className={cn(
                "py-1.5 rounded-sm text-sm flex items-center gap-1 text-gray-600"
              )}
            >
              {quiz[optionKey]?.isTrue ? (
                <CircleCheck className="size-4 text-emerald-500" />
              ) : (
                <Circle className="size-4" />
              )}
              <p>{quiz[optionKey]?.label}</p>
            </div>
          )
        )}
      </>
    );
}