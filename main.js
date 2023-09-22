import createTask from "./createTask.js"

(() => {
        const addProjectBtn = document.querySelector('.add-project-btn')
        const addProjectForm = document.querySelector('#add-project-form')
        const addTaskBtn = document.querySelector('.add-task-btn')
        const addTaskForm = document.querySelector('#add-task-form')
        const addBtn = document.querySelectorAll('.add-btn')
        const cancelBtn = document.querySelectorAll('.cancel-btn')




        addProjectBtn.addEventListener('click', function () {
                addProjectForm.style.display = 'flex'
                addProjectBtn.style.display = 'none'
        })

        addTaskBtn.addEventListener('click', function () {
                addTaskForm.style.display = 'flex'
                addTaskBtn.style.display = 'none'
        })

        addBtn.forEach((button) =>  {
                button.addEventListener('click', function(e) {
                        e.preventDefault()
                        console.log('clicked')
                })
        })


        cancelBtn.forEach((button) =>  {
                button.addEventListener('click', function(e) {
                        e.preventDefault()
                        console.log('clicked')
                })
        })

})()

let testing = createTask('this is a test', 'testing', 123)
console.log(testing)


