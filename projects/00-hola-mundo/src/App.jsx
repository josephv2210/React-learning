import { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const formatUserName = (userName) => `@${userName}`;
  const info = {
    formatUserName: formatUserName,
    userName: "Juan",
    name: "Juan Garcia",
    number: "75",
  };

  const [name, setName] = useState("joseph");

  const changeName = () => {
    setName("Juan paco pedro");
  };

  const users = [
    {
      formatUserName: formatUserName,
      userName: "Juan",
      name: "louis",
      number: "1",
    },
    {
      formatUserName: formatUserName,
      userName: "Juan2",
      name: "louis",
      number: "2",
    },
    {
      formatUserName: formatUserName,
      userName: "Juan3",
      name: "louis",
      number: "3",
    },
    {
      formatUserName: formatUserName,
      userName: "Juan4",
      name: "louis",
      number: "4",
    },
    {
      formatUserName: formatUserName,
      userName: "Juan5",
      name: "louis",
      number: "5",
    },
  ];

  return (
    <section className="">
      
      {
      users.map(user => {
        const {formatUserName, userName, name, number} = user
        return(
          <TwitterFollowCard
            key = {userName}
            formatUserName = {formatUserName}
            userName = {userName}
            name = {name}
            number = {number}
          />
         )
      })
      }

      {/* <TwitterFollowCard
        formatUserName={formatUserName}
        userName="Juan"
        name={name}
        number={"75"}
        initialIsFollowing={true}
      >
        El children
      </TwitterFollowCard>
      {/* Objeto como prop */}
      {/* Esta es una manera de pasar cada uno de los items como propiedades aparte */}
      {/* <TwitterFollowCard {...info} />  */}
      {/* <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing={true}
        userName="Juan"
        name={"Juan Garcia"}
        number={"75"}
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing={false}
        userName={"Juan"}
        name={"Juan Garcia"}
        number={"1"}
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing={true}
        userName={"Juan"}
        name={"Juan Garcia"}
        number={"2"}
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing={true}
        userName={"Juan"}
        name={"Juan Garcia"}
        number={"3"}
      /> */}

      <button onClick={changeName}>Cambnio Nombre</button>
    </section>
  );
}
