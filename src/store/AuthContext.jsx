import { createContext,  useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../config/firebaseConfig";


export const AuthContext = createContext();


export const AuthContextProvider = (props) => {
    const [user, setUser] = useState(null);
    
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
        return(loggedUser);
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Error: ${errorCode} - ${errorMessage}`);
    }
   };

   const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const loggedUser = userCredential.user;
      setUser(loggedUser);
      return (loggedUser);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`Error: ${errorCode} - ${errorMessage}`);
    }
  }; 

        const checkUserStatus = () => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                  
                  //const uid = user.uid;
                  console.log("user is logged in");
               
                } else {
                  console.log("user is not logged in");
                }
              });
        }

        const logout = () => {
            signOut(auth)
              .then(() => {
                console.log("logout succesfull");
                setUser(null);
              })
              .catch((error) => {
                console.log("error logging out");
              });
          };

        useEffect(() => {
            checkUserStatus();
          }, []);

    return(
        <AuthContext.Provider value={{user, setUser, login, logout, register}}>
{props.children}
        </AuthContext.Provider>
    );
};
