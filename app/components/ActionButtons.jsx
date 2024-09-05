import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";
export default function ActionButtons({quiz, handleEdit, handleDelete}){
    return (
        <div className="flex items-center justify-end gap-2 mt-6">
        <Button
          onClick={() => handleEdit(quiz.quiz_id)}
          variant="ghost"
          size="sm"
        >
          <Pencil className="w-3 mr-1" /> Edit
        </Button>
        <Button
          size="sm"
          className="text-destructive"
          variant="ghost"
          onClick={() => handleDelete(quiz.quiz_id)}
        >
          <Trash className="w-3 mr-1" /> Delete
        </Button>
      </div>
    );
}