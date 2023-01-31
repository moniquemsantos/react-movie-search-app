import { createContext,  useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";


export const AuthContext = createContext();


export const AuthContextProvider = (props) => {
    const [user, setUser] = useState({});
    
    const register = async (email, password) => { 
        console.log(email, password);

    try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
    
        const user = userCredential.user;
        console.log("user :>> ", user);
        setUser(userCredential.user);
      } catch (error) {
        console.log("error", error);
        const errorCode = error.code;
        const errorMessage = error.message;
    }
   };

   const login = () => {
        setUser({
            userName: "Monique",
        })
   }

    return(
        <AuthContext.Provider value={{user, setUser, login, register}}>
{props.children}
        </AuthContext.Provider>
    );
};
  