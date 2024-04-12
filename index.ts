#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"

let todos: string[] = [];
let condition = true
console.log('\n**********************************************************');
console.log(chalk.magenta.bold(`"You Welcome <^<^<^ *"Code With MUNEEB"* ^>^>^> TODO-LIST"`));
console.log('**********************************************************\n');

let main = async () => {
  while(condition){
    let option = await inquirer.prompt([{
      name: "choice",
      type: "list",
      message: chalk.yellow.bold("Select an option you want to do:"),
      choices: [ "Add Task", "Delete Task", "Update Task", "Veiw todo-list", "Exit"]
    }]);
    if(option.choice === "Add Task"){
      await addTask() 
    }
    else if(option.choice === "Delete Task"){
      await deleteTask()
    }
    else if(option.choice === "Update Task"){
      await updateTask()
    }
    else if(option.choice === "Veiw todo-list"){
      await viewTask()
    }
    else if(option.choice === "Exit"){
      condition = false
    }
  }
}

// function to add new task in todo-list
let addTask = async () => {
  let newTask = await inquirer.prompt([{
    name: "Task",
    type: "input",
    message: "Enter your new task"
  }]);
  todos.push(newTask.Task);
  console.log(chalk.green.bold(`\n${newTask.Task} Task added succesfully in todo-list`));

}
// function to veiw all todo-list tasks
let viewTask = () => {
  console.log("\nYour Todo-List:\n");
  todos.forEach( (task,index) => {
     console.log(`${index + 1} ${task}`);
  })
}
// function to delete task from todo-list
let deleteTask = async () => {
    await viewTask()
    let taskIndex = await inquirer.prompt([{
      name: "index",
      type: "number",
      message: "Please select your 'index no.' you want to delete from todo-list"
    }]);
    let deletedTask = todos.splice(taskIndex.index -1, 1)
    console.log(`${deletedTask} This task has been deleted succesfully from your todo-list`);
}

// function to update task to todo-list
let updateTask = async () => {
   await viewTask()
   let update_task_index = await inquirer.prompt([
    {   
      name: "index",
      type: "number",
      message: "Please Enter your index no you want to update:"
    },
    {
      name: "newtask",
      type: "input",
      message: "Now Enter new task name:"
    }

   ]);
   todos[update_task_index.index -1] = update_task_index.newtask
   console.log(`\n Task add index no. ${update_task_index.index -1} Updated succesfully [For Updated list check option: "View todo-list"]`)
}

main();









