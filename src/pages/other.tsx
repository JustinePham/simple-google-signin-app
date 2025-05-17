import { useNavigate } from "react-router-dom";
import { useUser } from "../providers/userProvider";

export function Other() {
  const navigate = useNavigate();
  console.log(useUser());
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <button onClick={() => navigate('/')}>go to landing page</button>
    </div>
  );
}

export default Other;