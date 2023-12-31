
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';

const Register = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/patients/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    age,
                    bloodGroup,
                    credential: {
                        userName: email,
                        password,
                    },
                }),
            });

            console.log(response.ok)
            const navigate = useNavigate();
            if (response.ok == true) {
                // const result = await response.json();
                console.log(result); 
                navigate('/login');
              } else {
                const error = await response.text();
                console.error(`Failed to register patient: ${error}`);
              }
        } catch (error) {
            setErrorMessage('An error occurred while registering the user.');
        } finally {
            clearMessagesAfterDelay();
        }
    };

    const clearMessagesAfterDelay = () => {
        setTimeout(() => {
            setSuccessMessage('');
            setErrorMessage('');
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="flex-1 bg-white text-center hidden lg:flex mt-20 ">
                    <div
                        className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                        style={{ backgroundImage: 'url("https://i.ibb.co/ysH1r1Z/Login.jpg")' }}
                    ></div>
                </div>
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div className="flex flex-col items-center mt-20">
                        <h1 className="text-2xl xl:text-3xl font-extrabold">Register</h1>
                        <div className="w-full flex-1 mt-8">
                            <div className="mx-auto max-w-xs mt-10">
                                <input
                                    name="name"
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="text"
                                    placeholder="Name"
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <div className='flex space-x-2'>
                                    <input
                                        name="blood_group"
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        type="text"
                                        placeholder="Blood Group "
                                        onChange={(e) => setBloodGroup(e.target.value)}
                                    />
                                    <input
                                        name="age"
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        type="text"
                                        placeholder="Age"
                                        onChange={(e) => setAge(e.target.value)}
                                    /></div>
                                <input
                                    name="email"
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                    type="email"
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    name="password"
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    onClick={handleRegister}
                                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                >
                                    <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                        <circle cx="8.5" cy="7" r="4" />
                                        <path d="M20 8v6M23 11h-6" />
                                    </svg>
                                    <span className="ml-3">Register</span>
                                </button>
                                <p className="mt-6 text-xs text-gray-600 text-center">Already have an account ?</p>
                                <NavLink
                                    to="/login"
                                    className="mt-5 tracking-wide font-semibold bg-blue-500 text-gray-100 w-full py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                >
                                    <span className="ml-3">Login</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <ToastContainer /> */}

            {successMessage && (
                <div className="absolute bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded">
                    {successMessage}
                </div>
            )}

            {errorMessage && (
                <div className="absolute bottom-4 right-4 bg-red-500 text-white py-2 px-4 rounded">
                    {errorMessage}
                </div>
            )}
        </div>
    );
};

export default Register;
