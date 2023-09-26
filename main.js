import createTask from "./createTask.js"


const addProjectBtn = document.querySelector('.add-project-btn')
const addProjectForm = document.querySelector('#add-project-form')
const addTaskBtn = document.querySelector('.add-task-btn')
const addTaskForm = document.querySelector('#add-task-form')
const addBtn = document.querySelectorAll('.add-btn')
const cancelBtn = document.querySelectorAll('.cancel-btn')
const taskItemsSection = document.querySelector('.task-items')
const projectItemsSection = document.querySelector('.left-column')
const taskInput = document.querySelector('.add-task-input')
const tasks = []


addProjectBtn.addEventListener('click', function () {
        addProjectForm.style.display = 'flex'
        addProjectBtn.style.display = 'none'
})

addTaskBtn.addEventListener('click', function () {
        addTaskForm.style.display = 'flex'
        addTaskBtn.style.display = 'none'
})


// get user input from fields on form submit
const taskForm = document.querySelector('#add-task-form')
taskForm.addEventListener('submit', function(e) {
        e.preventDefault()
        // grab input value
        const taskInputValue = taskInput.value.trim()
        console.log(taskInputValue)

        // validate input
        if (taskInputValue == '') {
                alert('Please enter a valid value!')
                return
        }

        // create a task object with input values
        const task = {
                title: taskInputValue,
                completed: false
        }
        // add task to array
        tasks.push(task)
        // clear form inputs
        taskInput.value = ''
        // display tasks
        displayTasks()

})

cancelBtn.forEach((button) => {
        button.addEventListener('click', function (e) {
                e.preventDefault()
                console.log('form closed')
                addProjectForm.style.display = 'none'
                addTaskForm.style.display = 'none'
                addProjectBtn.style.display = 'flex'
                addTaskBtn.style.display = 'flex'
        })
})


// create display function for tasks in array
function displayTasks() {
        console.log(tasks)
        tasks.forEach((task) => {
                console.log(task)
        })
}
// create inner html for each task
// create event listeners for task buttons
// append task to task list section





