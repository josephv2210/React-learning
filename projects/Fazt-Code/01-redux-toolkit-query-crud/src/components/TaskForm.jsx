import { useCreateTaskMutation } from '../api/apiSlice'

function TaskForm() {

    const [createTask] = useCreateTaskMutation()

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.elements.name.value.trim();
        const description = e.target.elements.description.value.trim();
        const completed = e.target.elements.completed.checked;

        console.log(name, description, completed)

        console.log('submit')

        createTask({
            name,
            description,
            completed
        })

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" id="" />
            <input type="text" name="description" id="" />
            <input type="checkbox" name="completed" id="" />

            <button>Add Task</button>
        </form>
    )
}

export default TaskForm