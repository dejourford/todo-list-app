import createTask from "./createTask.js"

(() => {
        const addProjectBtn = document.querySelector('.add-project-btn')
        const addProjectForm = document.querySelector('#add-project-form')
        const addTaskBtn = document.querySelector('.add-task-btn')
        const addTaskForm = document.querySelector('#add-task-form')
        const addBtn = document.querySelectorAll('.add-btn')
        const cancelBtn = document.querySelectorAll('.cancel-btn')
        const taskItemsSection = document.querySelector('.task-items')
        const projectItemsSection = document.querySelector('.left-column')
        const taskArray = []


        addProjectBtn.addEventListener('click', function () {
                addProjectForm.style.display = 'flex'
                addProjectBtn.style.display = 'none'
        })

        addTaskBtn.addEventListener('click', function () {
                addTaskForm.style.display = 'flex'
                addTaskBtn.style.display = 'none'
        })




        // create listener for adding tasks
        addBtn.forEach((button) => {
                button.addEventListener('click', function (e) {
                        e.preventDefault()
                        addProjectForm.style.display = 'none'
                        addTaskForm.style.display = 'none'
                        addProjectBtn.style.display = 'flex'
                        addTaskBtn.style.display = 'flex'


                        // grab input content
                       const projectInputValue = document.querySelector('.add-project-input').value
                       const taskInputValue = document.querySelector('.add-task-input').value
                        projectInputValue ? console.log(`The project task is: ${projectInputValue}`) : console.log(`The project task is: ${projectInputValue}`)
                        taskInputValue ? console.log(`The inbox task is: ${taskInputValue}`) : console.log(`The inbox task is: ${taskInputValue}`)


                        // reset input field after submit
                        addProjectForm.reset()
                        addTaskForm.reset()

                        // append values to DOM
                        // create function for creating a task item
                        const taskItem = document.createElement('li')
                        taskItem.className = 'task-item'
                        const taskItemText = document.createElement('p')
                        taskItemText.textContent = taskInputValue
                        const taskItemCheckbox = document.createElement('input')
                        taskItemCheckbox.className = 'task-item-checkbox-input'
                        taskItemCheckbox.type = 'checkbox'
                        taskItem.append(taskItemCheckbox, taskItemText)
                        if (taskInputValue) {
                                taskItemsSection.insertBefore(taskItem, addTaskBtn)
                                taskArray.push(taskInputValue)
                                console.log(taskArray)
                        }


                        // create function for creating a project item
                        const projectItem = document.createElement('li')
                        projectItem.className = 'project-item'
                        projectItem.textContent = projectInputValue
                        if (projectInputValue) {
                                projectItemsSection.insertBefore(projectItem, addProjectBtn)
                        }

                })

                
        
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



})()




