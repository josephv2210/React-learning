// import TodoCounter from "./components/TodoCounter/TodoCounter";
// import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
// import CreateTodoButton from "./components/CreateTodoButton";
import TodoItem from "./components/TodoItem";
import TodoAnalytics from "./components/TodoAnalytics/TodoAnalytics";
import TodoGraph from "./components/TodoGraph/TodoGraph";
import TodoSearch from "./components/TodoSearch/TodoSearch";
import TodoSelectCategory from "./components/TodoSelectCategory/TodoSelectCategory";

const defaultTodos = [
  { text: "Jugar", completed: true, color: "#83C5BE" },
  { text: "Comer", completed: true, color: "#006D77" },
  { text: "Dormir", completed: false, color: "#FFDDD2" },
  { text: "Soñar", completed: false, color: "#83C5BE" },
];

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
          <TodoSelectCategory />

          <TodoGraph
            progress={50}
          />


          <TodoAnalytics />

        </section>
        <section className="w-2/3 ps-12 flex items-center flex-col ">
          <h1 className="font-bold text-dark text-4xl"> TODO List</h1>
          <TodoSearch />

          <TodoList className='mt-5'>
            {defaultTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                color={todo.color}
              />
            ))}
          </TodoList>

          <button>Create</button>
          <button>Ocultar las tareas realizadas</button>
        </section>
      </div>
    </>
  );
}

export default App;
