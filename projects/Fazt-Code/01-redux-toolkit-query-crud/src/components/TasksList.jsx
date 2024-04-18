import { useGetTasksQuery, useDeleteTaskMutation, useUpdateTaskMutation } from "../api/apiSlice"

function TasksList() {

    const { data: tasks, isError, isLoading, error } = useGetTasksQuery();
    const [deleteTask] = useDeleteTaskMutation();
    const [updateTask] = useUpdateTaskMutation();
    // data -> la data que devuelve
    // isError -> si devuelve un error
    // isLoading (false) -> ya termino la consulta
    // error nombre del error
    console.log('tasks::: ', tasks);

    if (isLoading) return <div>Loading...</div>;
    else if (isError) return <div>Error: {error.message}</div>;


    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <h3>{task.name}</h3>
                    <p>{task.description}</p>

                    <button onClick={() =>
                        deleteTask(task.id)
                    }>
                        delete
                    </button>
                    <input type="checkbox" name="completed" id={task.id} checked={task.completed}
                        onChange={(e) => {
                            console.log('e::: ', e.target.checked);
                            updateTask({
                                ...task,
                                completed: e.target.checked
                            })
                        }}
                    />
                    <label htmlFor={task.id}>completed</label>
                </li>
            ))}
        </ul>
    );
}

export default TasksList