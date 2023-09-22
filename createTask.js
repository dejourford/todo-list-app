export default function createTask(title, description, duedate, priority) {
    return {
        title: title,
        description: description,
        duedate: duedate,
        priority: priority,
        getTitle: function () {
            return `Title: ${this.title}`
        },
        getDescription: function () {
            return `Description: ${this.description}`
        },
        getDueDate: function () {
            return `Due Date: ${this.duedate}`
        },
        getPriority: function () {
            return `Priority: ${this.priority}`
        }
    }

}

const task1 = createTask('take out trash', 'trash stinks', 123, 'high')
console.log(task1.getTitle())
console.log(task1.getDescription())