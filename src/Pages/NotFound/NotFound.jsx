import React from 'react';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 via-gray-300 to-gray-500">
            <div className="text-center p-12 bg-white rounded-3xl shadow-2xl transform transition-transform duration-300 hover:scale-105">
                <h1 className="text-9xl font-extrabold text-gray-800 mb-6 drop-shadow-md">404</h1>
                <p className="text-3xl font-semibold text-gray-700 mb-4">Oh no Not good! Page Not Found</p>
                <p className="text-gray-500 mb-6 text-lg leading-relaxed">
                    We’re sorry, but the page you’re looking for doesn’t exist. It might have been moved or deleted.
                </p>
                <a href="/" className="inline-block px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-teal-400 to-teal-600 rounded-full shadow-lg hover:from-teal-500 hover:to-teal-700 transform transition-transform duration-300 hover:scale-105">
                    Return to Home
                </a>
            </div>
        </div>
    );
};

export default NotFound;
