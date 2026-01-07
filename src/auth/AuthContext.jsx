import { createContext,useContext,useEffect,useState } from "react";



const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
const [user,setUser] = useState(null)
const [loading,setLoading] = useState(true)

useEffect(()=>{
    const token  = localStorage.getItem("token")

    if(token) {
        setUser({token})
    }
    setLoading(false)
},[]);

const login = (token) => {
    localStorage.getItem("token", token);
    setUser({token})
}

const logout = () => {
    localStorage.removeItem("token");
    setUser(null)
}

return(
    <authContext.Provider value={{user, login , logout ,loading}}>
        {children}
    </authContext.Provider>
);
}

export const useAuth = ()=>  useContext(AuthContext)