'use cient'

    import React ,{useState} from "react";
    import SideBar from "./SideBar";
    import Footer from "./Footer";

    const MainLayout = ({children}) =>{
        const[collapsed, setCollapsed] = useState();

        return(
            <div className="flex flex-col min-h-screen">
                <Header onToggle={() =>setCollapsed(!collapsed)}/>

                    <div className="flex flex-1 overflow-hidden">
                        <SideBar collapsed={collapsed}/>
                        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
                            {children}
                        </main>
                    </div>
            </div>
        );
    };

    export default MainLayout;