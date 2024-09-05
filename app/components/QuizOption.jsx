
import { Checkbox } from "@/components/ui/checkbox";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
export default function QuizOption({quiz, form , isSubmitting}){
    return (
        <div className="space-y-3">
        <FormLabel>{quiz.formLabel}</FormLabel>
        <div className="flex items-start gap-3">
          <FormField
            control={form.control}
            name={quiz.isTrue}
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex-1">
            {/* option label  */}
            <FormField
              control={form.control}
              name={quiz.optionLabel}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder={quiz.placeHolder}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </div>
    );
}