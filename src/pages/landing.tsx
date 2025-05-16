import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import { useUser } from '../providers/userProvider'; // Import your hook

type credentialResponse = {
  credential: string ;  
}

type credentials = {
  sub: string;
  name: string;
    picture: string;
    email: string;
    email_verified: boolean;
    locale: string;

    iss: string;
    aud: string;
    azp: string;
    iat: number;
    exp: number;
    jti: string;

}

function Landing() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { setUser } = useUser(); // Use the context
  const navigate = useNavigate();

   

  return (
    <div>
      <h1>Landing Page</h1>
      <p>Welcome to the landing page!</p>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          let resp = credentialResponse as credentialResponse;
          const user = jwtDecode<credentials>(resp.credential);
          setUser(user);
          setIsLoggedIn(true);
          navigate('/home');
        }}
        onError={() => {
          alert('Login Failed');
        }}
      />
    </div>
  );
}
 
export default Landing;