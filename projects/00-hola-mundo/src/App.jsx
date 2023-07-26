import { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const formatUserName = (userName) => `@${userName}`;
  const info = {
  formatUserName: formatUserName,
  userName:"Juan",
  name:"Juan Garcia",
  number:"75"}

  const [name, setName] = useState('joseph') 

  const changeName = () => {
    setName('Juan paco pedro')
  }

  return (
    <section className="">
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="Juan"
        name={name}
        number={"75"}
      >
        El children
      </TwitterFollowCard>
      {/* Objeto como prop */}
      {/* Esta es una manera de pasar cada uno de los items como propiedades aparte */}
      <TwitterFollowCard {...info}/> 
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

      <button onClick={changeName}>
        Cambnio Nombre
      </button>
    </section>
  );
}
