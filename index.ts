#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "enter first name", type: "number", name: "firstname" },
  { message: "second name", type: "number", name: "secondname" },
  {
    message: "select one of the operation to perform operation",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);
//conditional command 
if (answer.operator==="addition") 
{console.log(answer.firstname + answer.secondname);}
else if (answer.operator==="subtraction")
{console.log(answer.firstname - answer.secondname);}
else if (answer.operator==="multiplication")
{console.log(answer.firstname * answer.secondname);}
else if (answer.operator==="division")
{console.log(answer.firstname / answer.secondname);}
else {console.log("please wrie a valid operator");}