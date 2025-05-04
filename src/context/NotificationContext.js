import { createContext, useCOntext, useState, useEffect, Children, useContext } from "react";
import {getNotification, markAsRead} from "../services/authService";

const NotificationContext = useContext();

export const NotifactionProvider = ({children}) =>{
    const{ notification, sendNotification} =useState([]);


    const loadNotification = async () =>{
        try{
            const data = await getNotification();
            sendNotification(data);
        }catch(err){
            console.log('Failed to load notification.', err);
        }
    };

    const markNotification = async(id) =>{
        await markAsRead(id);
        sendNotification((prev) =>{
            prev.map((n) => (n._id === id ? {...n, read:true} :n))
        });
    };

    useEffect(() =>{
        loadNotification();
    }, []);

    return(
        <NotificationContext.Provider value ={ {
            notification, markNotification, reload:loadNotification
        }}></NotificationContext.Provider>
    );
};

export const useNotifications = () => useContext(NotificationContext);