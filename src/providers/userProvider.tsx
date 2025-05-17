import { googleLogout } from '@react-oauth/google';
import { createContext, useContext, useEffect, useState } from 'react';

type User = {
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


type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
};

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  logout: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem('userInfo');
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('userInfo', JSON.stringify(user));
    } else {
      localStorage.removeItem('userInfo');
    }
  }, [user]);

  const logout = () => {
    setUser(null);
    googleLogout();
    localStorage.removeItem('userInfo');
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

 
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};