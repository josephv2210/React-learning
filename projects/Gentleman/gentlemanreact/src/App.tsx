import { useFetch } from "./hooks";
import "./App.css";

const url = "https://jsonplaceholder.typicode.com/posts";

interface Data {
  name: string;
  lastName: string;
  age: number;
}

function App() {
  const {data, error, loading} = useFetch<Data>(url);

  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}

export default App;
