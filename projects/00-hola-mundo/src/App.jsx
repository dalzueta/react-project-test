import { TwitterFollowCard } from "./components/TwitterFollowCard";

export default function App() {
  return (
    <div className="App">
      sss
      <TwitterFollowCard isFollowing userName="ironMan" name="Iron Man" />
      <TwitterFollowCard userName="Batman" name="Fulano Diaz" />
      <TwitterFollowCard userName="musk" name="Juana Misk" />
      <TwitterFollowCard userName="daniel" name="Daniel Alejandro Alzueta" />
      <TwitterFollowCard userName="jmilei" name="Javier Milei" />
    </div>
  );
}
