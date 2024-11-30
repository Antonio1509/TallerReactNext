import React, { useState } from 'react';

export interface CardProps {
    title: string;
    description: string;
    likes: number;
}

const Card = ({title, description, likes}: CardProps) => {
    const [isLiked, setIsLiked] = useState(false);
    const [currentLikes, setCurrentLikes] = useState(likes);

    const handleLike = () => {
        setIsLiked(!isLiked);
        setCurrentLikes(isLiked ? currentLikes - 1 : currentLikes + 1);
    };

    return (
        <div className="bg-white rounded-lg p-6 shadow-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-custom-gray-200">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-Montserrat font-bold text-custom-blue-900">{title}</h3>
                <span className="text-custom-gray-300 text-sm">Proyecto</span>
            </div>
            <p className="text-custom-gray-300 mb-4 text-sm">{description}</p>
            <div className="flex items-center justify-between">
                <button 
                    onClick={handleLike}
                    className="flex items-center space-x-2 text-sm hover:bg-custom-blue-50 p-2 rounded-full transition-colors"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill={isLiked ? "currentColor" : "none"} 
                        viewBox="0 0 24 24" 
                        strokeWidth="1.5" 
                        stroke="currentColor" 
                        className={`w-5 h-5 ${isLiked ? 'text-custom-blue-500' : 'text-custom-gray-300'}`}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V3a.75.75 0 0 1 .75-.75A2.25 2.25 0 0 1 16.5 4.5c0 1.402-.5 2.767-1.413 3.814.477.088.942.195 1.395.318a.75.75 0 0 1 .526.708c0 .428-.26.81-.837 1.244-.576.434-1.281.79-2.117 1.062C14.832 11.369 14 12.5 14 13.5h-3c0-1.103-.632-2.074-1.616-2.692A9.012 9.012 0 0 1 6.633 10.5zM12 12a2.25 2.25 0 0 0-2.25 2.25v2.25A2.25 2.25 0 0 0 12 18.75V22.5" />
                    </svg>
                    <span className={`${isLiked ? 'text-custom-blue-500 font-bold' : 'text-custom-gray-300'}`}>
                        {currentLikes}
                    </span>
                </button>
                <a 
                    href="#" 
                    className="text-custom-blue-500 hover:text-custom-blue-900 text-sm flex items-center space-x-1"
                >
                    <span>Ver más</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default Card;