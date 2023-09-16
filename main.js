import createTask from "./createTask.js"

(() => {
    const addProjectBtn = document.querySelector('.add-project-btn')
    const addProjectForm = document.querySelector('#add-project-form')
    const addTaskBtn = document.querySelector('.add-task-btn')
    const addTaskForm = document.querySelector('#add-task-form')

    addProjectBtn.addEventListener('click', function () {
            addProjectForm.style.display = 'flex'
            addProjectBtn.style.display = 'none'
    })

    addTaskBtn.addEventListener('click', function () {
            addTaskForm.style.display = 'flex'
            addTaskBtn.style.display = 'none'
    })

})()

createTask()


