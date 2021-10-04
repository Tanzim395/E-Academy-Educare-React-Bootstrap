// import Button from '@restart/ui/esm/Button';
import React from 'react';
// import { Form, FormControl } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        backgroundColor: "#4F46E5",
        color: 'white'
    }
    return (
        <div>
            <div >

                <nav className="bg-dark py-2 md:py-4 text-white">
                    <div className="container px-4 mx-auto md:flex md:items-center">

                        <div className="flex justify-between items-center">
                            <NavLink to="#" className="font-bold text-xl text-current font-serif">E-Academy</NavLink>
                            <button className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
                                <i className="fas fa-bars"></i>
                            </button>
                        </div>

                        {/* <div>
                            <Form className="d-flex justify-content-center">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </div> */}

                        <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                            <NavLink to="/home" activeStyle={activeStyle} className="p-2 lg:px-4 md:mx-2  rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-100">Home</NavLink>

                            <NavLink to="/about" activeStyle={activeStyle} className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">About</NavLink>

                            <NavLink to="/courses" activeStyle={activeStyle} className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Courses</NavLink>


                            <NavLink to="/teachers" activeStyle={activeStyle} className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Teachers</NavLink>

                            <NavLink to="/success" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Success</NavLink>

                            <NavLink to="#" className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">Login</NavLink>
                        </div>
                    </div>
                </nav>


            </div>





        </div>

    );
};

export default Header;