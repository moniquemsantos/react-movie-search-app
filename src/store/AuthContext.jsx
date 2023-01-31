import { createContext,  useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";


export const AuthContext = createContext();


export const AuthContextProvider = (props) => {
    const [user, setUser] = useState();
    
    const register = async (email, password) => { 
        console.log(email, password);

    try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
    
        const loggedUser = userCredential.user;
        console.log("user :>> ", loggedUser);
        setUser(loggedUser);
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Error: ${errorCode} - ${errorMessage}`);
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
  