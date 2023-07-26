import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const formatUserName = (userName) => `@${userName}`;

  return (
    <div className="">
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing={true}
        userName="Juan"
        name={"Juan Garcia"}
        number={"75"}
      >
        El children
      </TwitterFollowCard>
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
    </div>
  );
}
