"use client";

import { useState } from 'react';

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, active = false }) => (
  <div className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors 
    ${active ? 'bg-custom-blue-50 text-custom-blue-900' : 'hover:bg-custom-gray-100'}`}>
    {icon}
    <span className="ml-3 text-sm font-medium">{label}</span>
  </div>
);

const Sidebar = () => {
    const [isExpanded, setExpanded] = useState(true);

    const menuItems = [
        { 
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            ),
            label: "Inicio",
            active: true
        },
        { 
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
            ),
            label: "Perfil"
        },
        { 
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.171 1.025 1.171 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
            ),
            label: "Ayuda"
        }
    ];

    return (
        <div className={`h-screen bg-white border-r transition-all duration-300 ease-in-out 
            ${isExpanded ? 'w-64' : 'w-20'} shadow-medium`}>
            <div className="p-4 flex items-center justify-between">
                <button 
                    onClick={() => setExpanded(!isExpanded)}
                    className="text-custom-gray-300 hover:text-custom-blue-500 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
                {isExpanded && <span className="text-lg font-bold text-custom-blue-900">Dashboard</span>}
            </div>
            <nav className="mt-4 space-y-2 px-3">
                {menuItems.map((item, index) => (
                    <MenuItem 
                        key={index} 
                        icon={item.icon} 
                        label={isExpanded ? item.label : ''} 
                        active={item.active}
                    />
                ))}
            </nav>
        </div>
    );
}

export default Sidebar;