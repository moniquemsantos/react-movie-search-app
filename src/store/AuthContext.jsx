import { createContext,  useState } from "react";

export const AuthContext = createContext()


export const AuthContextProvider = (props) => {

   const [user,setUser] = useState({})

   const login = () => {
        setUser({
            userName: "Monique",
        })
   }

    return(
        <AuthContext.Provider value={{user, setUser, login}}>
{props.children}
        </AuthContext.Provider>
    )
}
