'use clinet'

import Link from "next/link";
import {usePathname} from "next/navigation";
import { useState } from "react";
import { motion  } from "framer-motion";
import{
    MdDashboard,
    MdAssignment,
    MdGroups,
    MdNotifications,
} from "react-icons/md";

const navItems =[
    {href: '/dashboard',label:'dashbaord', icon:<MdDashboard/>},
    {href: '/tasks',label:'Task', icon:<MdAssignment/>},
    {href: '/teams',label:'Teams', icon:<MdGroups/>},
    {href: '/notifications',label:'Notification', icon:<MdNotifications/>},
];

const SideBar = ({collapsed}) =>{
    const [hovered, setHovered ] = useState(false);
    const pathname = usePathname();
    const iscollapsed = collapsed && hovered;

    <motion.aside
    className={`bg-white shadow-md h-full transition-all duration-300 ${
        iscollapsed ? 'w-16' : 'w-64'
    }`}
   onMouseEnter={() => setHovered(true)}
   onMouseLeave={() =>setHovered(false)}
   animate={{width: iscollapsed ? 64:256}}
   >
    <div className="p-4 font-bold text-lg">
        {isCollapsed ? 'TM' : 'TaskManager'}
      </div>
    <nav className="space-y-1 px-2">
        {navItems.map(({href, label, icon}) =>{
            const isActive = pathname.startsWith(href);
            return(
                <Link
                key={href}
                href={href}
                    className={`flex items-center gap-3 p-2 rounded transition-all hover:bg-blue-100 ${
                        isActive ? 'bg-blue-100 font-medium text-blue-600' : ''
                      }`}
                    >
                    <span className="text-xl">{icon}</span>
                    {!iscollapsed && <span>{label}</span>}
                
                </Link>
            );
        })}
        </nav>
    
   </motion.aside>
};

export default SideBar;