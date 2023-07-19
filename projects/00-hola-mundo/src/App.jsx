import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <div className="">
      <TwitterFollowCard isFollowing={true} userName={"Juan"} name={"Juan Garcia"} number={"75"} />
      <TwitterFollowCard isFollowing={false} userName={"Juan"} name={"Juan Garcia"} number={"1"} />
      <TwitterFollowCard isFollowing={true} userName={"Juan"} name={"Juan Garcia"} number={"2"} />
      <TwitterFollowCard isFollowing={true} userName={"Juan"} name={"Juan Garcia"} number={"3"} />
    </div>
  );
}
