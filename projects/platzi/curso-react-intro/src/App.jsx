// import TodoCounter from "./components/TodoCounter/TodoCounter";
// import TodoSearch from "./components/TodoSearch";
// import TodoList from "./components/TodoList";
// import CreateTodoButton from "./components/CreateTodoButton";
// import TodoItem from "./components/TodoItem";
import TodoAnalytics from "./components/TodoAnalytics/TodoAnalytics";
import TodoGraph from "./components/TodoGraph/TodoGraph";
import TodoSelectCategory from "./components/TodoSelectCategory/TodoSelectCategory";

// const defaultTodos = [
//   { text: "Jugar", completed: true },
//   { text: "Comer", completed: true },
//   { text: "Dormir", completed: false },
//   { text: "Soñar", completed: false },
// ];

function App() {
  return (
    <>
      {/* <TodoCounter 
        completed={16}
        total = {25}
      /> 
      <TodoSearch /> 

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key = {todo.text}
            text = {todo.text}
            completed = {todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton
        text={"Crear nuevo TODO"}
      /> */}
      <div className="bg-white-green h-screen w-screen flex p-24">
        <section className="w-1/3 pe-12 flex flex-col justify-between items-center ">
          <TodoSelectCategory/>

          <TodoGraph
                progress = {50}
          />
          
          
          <TodoAnalytics/>

        </section>
        <section className="w-2/3 ps-12 ">
          <h1 className="font-bold"> TODO List</h1>
          <div>search</div>
          <ul>
            <li>lista</li>
          </ul>

          <button>Create</button>
          <button>Ocultar las tareas realizadas</button>
        </section>
      </div>
    </>
  );
}

export default App;
