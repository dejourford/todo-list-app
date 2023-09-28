
const addProjectBtn = document.querySelector('.add-project-btn')
const addProjectForm = document.querySelector('#add-project-form')
const addTaskBtn = document.querySelector('.add-task-btn')
const addTaskForm = document.querySelector('#add-task-form')
const addBtn = document.querySelectorAll('.add-btn')
const cancelBtn = document.querySelectorAll('.cancel-btn')
const taskItemsSection = document.querySelector('.task-items')
const projectItemsSection = document.querySelector('.left-column')
const taskInput = document.querySelector('.add-task-input')
let tasks = []
let projects = []
let objectIdCounter = 0

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
taskForm.addEventListener('submit', function (e) {
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
                id: objectIdCounter++,
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
        taskItemsSection.innerHTML = ''
        console.log(tasks)
        tasks.forEach((task) => {
                console.log(task)

                // create each task item
                const taskItem = document.createElement('li')
                taskItem.className = 'task-item'

                // create inner html for each task
                taskItem.innerHTML = `
                <div class="task-item-left">
                <input type="checkbox" class="task-item-checkbox" ${task.completed ? 'checked' : ''}>
                <span>${task.title}</span>
                </div>
                <div class="task-item-right">
                <button class="delete-task-btn">X</button>
                </div>
                `



                // create event listeners for task buttons
                // listener for checkbox
                taskItem.querySelector('.task-item-checkbox').addEventListener('change', function () {
                        console.log('status has been changed!')
                })
                // listener for delete button
                taskItem.querySelector('.delete-task-btn').addEventListener('click', function () {
                        console.log('item has been requested to be deleted')
                        tasks = tasks.filter((t) => t.id != task.id)
                        displayTasks()
                })
                console.log(tasks)
                // append task to task list section
                taskItemsSection.append(taskItem)
        })
}



// get user input from project section
const projectForm = document.querySelector('#add-project-form')
const projectFormInput = document.querySelector('.add-project-input')
const projectSection = document.querySelector('.project-section')
projectForm.addEventListener('submit', function(e) {
        e.preventDefault()
        const projectTask = projectFormInput.value.trim()
        console.log(projectTask)
        
        // create task object
        const task = {
                id: objectIdCounter++,
                task: projectTask, 
                completed: false
        }
        
        // push element to project array
        projects.push(task)
        console.log(projects)
        // clear form input after submit
        projectFormInput.value = ''

        // display projects
        projectSection.innerHTML = ''
        displayProjects()
})

// create element from projects array
function displayProjects() {
        projectSection.innerHTML = ''
        projects.forEach((project) => {
                console.log(project)
                const projectItem =  document.createElement('li')
                projectItem.className = 'project-item'
                projectItem.innerHTML = `
                <div class="task-item-left">
                        <input type="checkbox" class="task-item-checkbox">
                        <p>${project.task}</p>
                </div>

                <div class="task-item-right">
                        <button class="delete-task-btn">X</button>
                </div>
                
                `
                

                // create listeners for buttons on each task
                projectItem.querySelector('.delete-task-btn').addEventListener('click', function() {
                        console.log('this item will be deleted')
                        projects = projects.filter((p) => p.id != project.id)
                        displayProjects()
                })
                console.log(projects)
                projectSection.append(projectItem)
        })
}



