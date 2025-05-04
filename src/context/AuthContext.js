import { createContext, useCOntext, useState, useEffect, Children } from "react";
import {login as loginService, logout as logoutService } from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null);

    useEffect(() =>{
        const savedUser = JSON.parse(localStorage.getItem('user'));
        if(savedUser) setUser(savedUser);
    }, []);

    const login = async (credentials) =>{
        const data =  await loginService(credentials);
        setUser(data);
        localStorage.setItem('user', JSON.stringify(data));
        return data;
    };

    const logout = async() =>{
        await logoutService();
        setUser(null)
        localStorage.removeItem('user');
    };

    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};