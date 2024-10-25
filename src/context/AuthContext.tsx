import {createContext, useContext, useState, ReactNode} from 'react';

interface AuthContextType{
    user: string | null;
    login:(username:string)=>void;
    logout:()=>void;
}


const AuthContext = createContext<AuthContextType | undefined>(undefined);


//a custom hook to use the auth context 
export const useAuth = () =>{
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

//provider component
export const AuthProvider = ({children}: {children: ReactNode}) =>{
    const [user,setUser] = useState<string|null>(localStorage.getItem('user'));
    
    const login = (username:string) =>{
        setUser(username);
        localStorage.setItem('user', username);

    };

    const logout = () =>{
        setUser(null);
        localStorage.removeItem('user');
    }

    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    );


};



