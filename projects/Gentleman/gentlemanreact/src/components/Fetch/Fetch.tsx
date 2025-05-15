import { useFetch } from "../../hooks";

const url = "https://api.example.com/data";
// const userUrl = "https://api.example.com/user";

interface Data {
  name: string;
  lastName: string;
  age: number;
}

export const Fetch = () => {
  const { data, error, loading } = useFetch<Data>(url);
  // const {data: dataUser, error: errorUser, loading: loadingUsr} = useFetch<{name: string}>(userUrl);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
};
