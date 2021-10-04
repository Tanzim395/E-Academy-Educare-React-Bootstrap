import React from 'react';
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='mt-20'>
            <hr className='border-2' />
            <footer className="p-6 bg-dark text-white">
                <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-medium">Our Location</h2>
                        <div className="flex flex-col space-y-2 text-sm dark:text-coolGray-400">
                            <p>Mascott Plaza,Uttara,Dhaka-1200</p>
                            <p>Phone-013235235215</p>
                            <p>e-mail:edu-care@e-academy.com</p>
                            <p>24/7 Online Care</p>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <h2 className="font-medium">Our Trustee</h2>
                        <p>
                            <ul>
                                <li>Mahbubul Islam</li>
                                <li>Hanif Morshed</li>
                                <li>Anisul Islam</li>
                            </ul>
                        </p>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-medium">Community</h2>
                        <div className="flex flex-col space-y-2 text-sm dark:text-coolGray-400">
                            <NavLink to="#">GitHub </NavLink>
                            <NavLink to="#">Discord </NavLink>
                            <NavLink to="#">Twitter </NavLink>
                            <NavLink to="#">YouTube </NavLink>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center px-6 pt-12 text-sm">
                    <span className="dark:text-coolGray-400">©copyright.      E-Academy 2021. All Rights Reserved.</span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;