import { useUser } from "../providers/userProvider";

export function Home() {
  
  console.log(useUser());
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
    </div>
  );
}

export default Home;