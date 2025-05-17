import { useNavigate } from "react-router-dom";
import { useUser } from "../providers/userProvider";

export function Home() {
  const { user, logout } = useUser();
  const navigate = useNavigate();

   const handleLogout = () => {
    logout(); // Use the context's logout method
    navigate("/"); // Redirect to landing or login page
  };

  console.log(useUser());
  return (
     <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      { user ? 
        <div>
          <img src={user.picture} alt={user.name} style={{ width: 50, borderRadius: "50%" }} />
          <p>{user.name}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      : "No user logged in" }
    </div>
  );
}

export default Home;