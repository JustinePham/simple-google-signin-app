import { createContext, useContext, useState } from 'react';

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
  setUser: (user: User) => void;
};
const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export function UserProvider({ children }) {
  const [user, setUser]  = useState<User | null>(useContext(UserContext).user ?? null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}