import React from 'react';

const NotFound = () => {
    return (
        <div>

            <div className="flex flex-col items-center justify-center py-24 lg:py-12 md:px-16 px-4">
                <h1 className="text-7xl font-bold text-indigo-700 pb-2">Error-404</h1>
                <p className="text-base text-gray-600 py-2 text-center">Sorry! The Page you are looking for Not Exist. Try Another</p>



                <div className="hidden md:grid place-content-center lg:w-1/3 w-1/2">
                    <img src="https://miro.medium.com/max/2000/1*cLQUX8jM2bMdwMcV2yXWYA.jpeg" alt="Try again Later" />
                </div>
                <div className="md:hidden grid place-content-center">
                    <img src="https://miro.medium.com/max/2000/1*cLQUX8jM2bMdwMcV2yXWYA.jpeg" alt="Try again Later" />
                </div>
            </div>

        </div>
    );
};

export default NotFound;