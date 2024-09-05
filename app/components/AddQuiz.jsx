"use client";

import * as z from "zod";
// import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import QuizOption from "./QuizOption";

const formSchema = z.object({
  title: z
    .string({
      required_error: "Question is required",
    })
    .min(1, {
      message: "Title is required",
    }),
  optionA: z.object({
    label: z
      .string({
        required_error: "Option label is required",
      })
      .min(1, {
        message: "Option label is required",
      }),
    isTrue: z.boolean().default(false),
  }),
  optionB: z.object({
    label: z
      .string({
        required_error: "Option label is required",
      })
      .min(1, {
        message: "Option label is required",
      }),
    isTrue: z.boolean().default(false),
  }),
  optionC: z.object({
    label: z
      .string({
        required_error: "Option label is required",
      })
      .min(1, {
        message: "Option label is required",
      }),
    isTrue: z.boolean().default(false),
  }),
  optionD: z.object({
    label: z
      .string({
        required_error: "Option label is required",
      })
      .min(1, {
        message: "Option label is required",
      }),
    isTrue: z.boolean().default(false),
  }),
});

export const AddQuizForm = ({ submitForm, editObj }) => {
  const router = useRouter();

  const quizOptions = [
    {
      formLabel: "Option A",
      isTrue: "optionA.isTrue",
      optionLabel: "optionA.label",
      placeHolder: "Enter option A label",
    },
    {
      formLabel: "Option B",
      isTrue: "optionB.isTrue",
      optionLabel: "optionB.label",
      placeHolder: "Enter option B label",
    },
    {
      formLabel: "Option C",
      isTrue: "optionC.isTrue",
      optionLabel: "optionC.label",
      placeHolder: "Enter option C label",
    },
    {
      formLabel: "Option D",
      isTrue: "optionD.isTrue",
      optionLabel: "optionD.label",
      placeHolder: "Enter option D label",
    },
  ];

  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: "all",
    defaultValues: {
      title: "",
      optionA: {
        label: "",
        isTrue: false,
      },
      optionB: {
        label: "",
        isTrue: false,
      },
      optionC: {
        label: "",
        isTrue: false,
      },
      optionD: {
        label: "",
        isTrue: false,
      },
    },
  });

  const { isSubmitting, isValid, errors } = form.formState;

  useEffect(() => {
    if (editObj) {
      form.reset(editObj);
    }
  }, [editObj]);

  const onSubmit = async (values) => {
    const id = "_" + Math.random().toString(36).substr(2, 6);
    try {
      const quiz_id = editObj ? editObj.quiz_id : id;

      values.quiz_id = quiz_id;
      if (Object.keys(editObj).length === 0) {
        submitForm(values, "add");
      } else {
        submitForm(values, "edit");
      }

      form.reset({
        title: "",
        optionA: {
          label: "",
          isTrue: false,
        },
        optionB: {
          label: "",
          isTrue: false,
        },
        optionC: {
          label: "",
          isTrue: false,
        },
        optionD: {
          label: "",
          isTrue: false,
        },
      });
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className=" order-1 1140:order-2 w-full max-w-full 1140:max-w-[550px] h-full   border bg-gray-50 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        {Object.keys(editObj).length === 0 ? "Add New Quiz" : "Edit Quiz"}
      </div>

      {
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            {/* quiz title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quiz Title</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="Enter quiz question"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <p className="max-w-[42rem] leading-normal text-muted-foreground text-base sm:leading-8">
              Please Select a correct answer below
            </p>

            {/* Option A */}
            {quizOptions.map((quiz) => (
              <QuizOption quiz={quiz} form={form} isSubmitting={isSubmitting} />
            ))}

            <div className="flex items-center justify-end gap-x-2">
              <Button className="text-[14px]" disabled={isSubmitting} type="submit">
                {Object.keys(editObj).length === 0 ? "Add" : "Update"}
              </Button>
            </div>
          </form>
        </Form>
      }
    </div>
  );
};
