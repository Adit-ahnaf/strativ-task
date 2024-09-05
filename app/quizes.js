const quizlist = [
  {
    quiz_id: 1,
    title: "Which company developed JavaScript?",
    optionA: {
      label: "Microsoft",
      isTrue: false,
    },
    optionB: {
      label: "Netscape",
      isTrue: true,
    },
    optionC: {
      label: "Google",
      isTrue: false,
    },
    optionD: {
      label: "Apple",
      isTrue: false,
    },
    weight: 1,
  },
  {
    quiz_id: 2,
    title: "Which type of language is JavaScript?",
    optionA: {
      label: "Compiled",
      isTrue: false,
    },
    optionB: {
      label: "Interpreted",
      isTrue: true,
    },
    optionC: {
      label: "Machine",
      isTrue: false,
    },
    optionD: {
      label: "Assembly",
      isTrue: false,
    },
    weight: 1,
  },
  {
    quiz_id: 3,
    title: "What does 'DOM' stand for?",
    optionA: {
      label: "Document Object Model",
      isTrue: true,
    },
    optionB: {
      label: "Data Object Mode",
      isTrue: false,
    },
    optionC: {
      label: "Document Oriented Model",
      isTrue: false,
    },
    optionD: {
      label: "Data-Oriented Mode",
      isTrue: false,
    },
    weight: 1,
  },
  {
    quiz_id: 4,
    title: "Which keyword is used to declare a variable in JavaScript?",
    optionA: {
      label: "var",
      isTrue: false,
    },
    optionB: {
      label: "let",
      isTrue: false,
    },
    optionC: {
      label: "const",
      isTrue: false,
    },
    optionD: {
      label: "All of the above",
      isTrue: true,
    },
    weight: 1,
  },
  {
    quiz_id: 5,
    title: "Which method is used to parse a string to an integer in JavaScript?",
    optionA: {
      label: "parseInt()",
      isTrue: true,
    },
    optionB: {
      label: "parseFloat()",
      isTrue: false,
    },
    optionC: {
      label: "toInteger()",
      isTrue: false,
    },
    optionD: {
      label: "parse()",
      isTrue: false,
    },
    weight: 1,
  },
  {
    quiz_id: 6,
    title: "Which of the following is a JavaScript data type?",
    optionA: {
      label: "Number",
      isTrue: false,
    },
    optionB: {
      label: "String",
      isTrue: false,
    },
    optionC: {
      label: "Boolean",
      isTrue: false,
    },
    optionD: {
      label: "All of the above",
      isTrue: true,
    },
    weight: 1,
  },
  {
    quiz_id: 7,
    title: "Which of the following is not a reserved keyword in JavaScript?",
    optionA: {
      label: "interface",
      isTrue: false,
    },
    optionB: {
      label: "throws",
      isTrue: false,
    },
    optionC: {
      label: "program",
      isTrue: true,
    },
    optionD: {
      label: "short",
      isTrue: false,
    },
    weight: 1,
  },
  {
    quiz_id: 8,
    title: "What is the output of: console.log(typeof null)?",
    optionA: {
      label: "object",
      isTrue: true,
    },
    optionB: {
      label: "null",
      isTrue: false,
    },
    optionC: {
      label: "undefined",
      isTrue: false,
    },
    optionD: {
      label: "number",
      isTrue: false,
    },
    weight: 1,
  },
  {
    quiz_id: 9,
    title: "How do you write a comment in JavaScript?",
    optionA: {
      label: "// This is a comment",
      isTrue: true,
    },
    optionB: {
      label: "# This is a comment",
      isTrue: false,
    },
    optionC: {
      label: "/* This is a comment */",
      isTrue: false,
    },
    optionD: {
      label: "-- This is a comment",
      isTrue: false,
    },
    weight: 1,
  },
  {
    quiz_id: 10,
    title: "Which method adds an element to the end of an array?",
    optionA: {
      label: "push()",
      isTrue: true,
    },
    optionB: {
      label: "pop()",
      isTrue: false,
    },
    optionC: {
      label: "shift()",
      isTrue: false,
    },
    optionD: {
      label: "unshift()",
      isTrue: false,
    },
    weight: 1,
  },
  // {
  //   quiz_id: 11,
  //   title: "What will be the output of: 2 + '2'?",
  //   optionA: {
  //     label: "22",
  //     isTrue: true,
  //   },
  //   optionB: {
  //     label: "4",
  //     isTrue: false,
  //   },
  //   optionC: {
  //     label: "NaN",
  //     isTrue: false,
  //   },
  //   optionD: {
  //     label: "TypeError",
  //     isTrue: false,
  //   },
  //   weight: 1,
  // },
  // {
  //   quiz_id: 12,
  //   title: "How do you create a function in JavaScript?",
  //   optionA: {
  //     label: "function myFunction()",
  //     isTrue: true,
  //   },
  //   optionB: {
  //     label: "function = myFunction()",
  //     isTrue: false,
  //   },
  //   optionC: {
  //     label: "function:myFunction()",
  //     isTrue: false,
  //   },
  //   optionD: {
  //     label: "def myFunction()",
  //     isTrue: false,
  //   },
  //   weight: 1,
  // },
  // {
  //   quiz_id: 13,
  //   title: "Which operator is used to assign a value to a variable?",
  //   optionA: {
  //     label: "=",
  //     isTrue: true,
  //   },
  //   optionB: {
  //     label: "==",
  //     isTrue: false,
  //   },
  //   optionC: {
  //     label: "===",
  //     isTrue: false,
  //   },
  //   optionD: {
  //     label: "<=",
  //     isTrue: false,
  //   },
  //   weight: 1,
  // },
  // {
  //   quiz_id: 14,
  //   title: "What is the correct way to write an array in JavaScript?",
  //   optionA: {
  //     label: "var colors = ['red', 'green', 'blue']",
  //     isTrue: true,
  //   },
  //   optionB: {
  //     label: "var colors = ('red', 'green', 'blue')",
  //     isTrue: false,
  //   },
  //   optionC: {
  //     label: "var colors = {'red', 'green', 'blue'}",
  //     isTrue: false,
  //   },
  //   optionD: {
  //     label: "var colors = 'red', 'green', 'blue'",
  //     isTrue: false,
  //   },
  //   weight: 1,
  // },
  // {
  //   quiz_id: 15,
  //   title: "How do you round the number 7.25 to the nearest integer?",
  //   optionA: {
  //     label: "Math.round(7.25)",
  //     isTrue: true,
  //   },
  //   optionB: {
  //     label: "Math.floor(7.25)",
  //     isTrue: false,
  //   },
  //   optionC: {
  //     label: "Math.ceil(7.25)",
  //     isTrue: false,
  //   },
  //   optionD: {
  //     label: "Math.random(7.25)",
  //     isTrue: false,
  //   },
  //   weight: 1,
  // },
  // {
  //   quiz_id: 16,
  //   title: "Which event occurs when the user clicks on an HTML element?",
  //   optionA: {
  //     label: "onchange",
  //     isTrue: false,
  //   },
  //   optionB: {
  //     label: "onmouseclick",
  //     isTrue: false,
  //   },
  //   optionC: {
  //     label: "onmouseover",
  //     isTrue: false,
  //   },
  //   optionD: {
  //     label: "onclick",
  //     isTrue: true,
  //   },
  //   weight: 1,
  // },
  // {
  //   quiz_id: 17,
  //   title: "How do you declare a JavaScript variable?",
  //   optionA: {
  //     label: "var carName;",
  //     isTrue: true,
  //   },
  //   optionB: {
  //     label: "variable carName;",
  //     isTrue: false,
  //   },
  //   optionC: {
  //     label: "v carName;",
  //     isTrue: false,
  //   },
  //   optionD: {
  //     label: "carName = var;",
  //     isTrue: false,
  //   },
  //   weight: 1,
  // },
  // {
  //   quiz_id: 18,
  //   title: "Which method is used to remove the last element of an array?",
  //   optionA: {
  //     label: "pop()",
  //     isTrue: true,
  //   },
  //   optionB: {
  //     label: "shift()",
  //     isTrue: false,
  //   },
  //   optionC: {
  //     label: "splice()",
  //     isTrue: false,
  //   },
  //   optionD: {
  //     label: "unshift()",
  //     isTrue: false,
  //   },
  //   weight: 1,
  // },
];

export { quizlist };

