import { useLinkTo } from "@react-navigation/native";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface WithAuthContextProps {
  children: ReactNode;
}

interface AuthContextValues {
  user: null;
}

export const AuthContext = createContext({});
export const useAuthContext = () => useContext(AuthContext);

export default function WithAuthContext({ children }: WithAuthContextProps) {
  const linkTo = useLinkTo();

  const context: AuthContextValues = {
    user: null,
  };

  useEffect(() => {
    if (context.user) {
      linkTo("/auth/register");
    }
  }, [context.user]);

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}
