import { Header } from "./components/header";
import { Profile } from "./components/profile";
import { Post } from "./components/post";

export function App() {
  return(
    <>
    <Header />
    <div className="grid">
      <div>
      <Profile />
      </div>

      <div>
        <Post/>
      </div>
    </div>
    </>
  );
}
