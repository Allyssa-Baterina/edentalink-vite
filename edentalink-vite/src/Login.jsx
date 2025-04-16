import eDentalinkLogo from './assets/eDentalink Logo.png';
import backgroundImage from './assets/backgroundImage.png';
import { useNavigate } from 'react-router';
import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/calendar');
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div
            className="h-dvh overflow-auto flex sm:p-8 bg-cover"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div
                className="bg-white min-w-[320px] p-5 border-primary/50 border 
                sm:inset-shadow-[0_0_3px_var(--color-primary)]
                sm:shadow-[0_0_3px_var(--color-primary)] w-full h-full m-auto flex flex-col items-center 
                sm:rounded-[34px] sm:h-[470px] sm:max-w-[700px] sm:px-18"
            >
                <div className="flex items-end my-14 sm:my-0">
                    <img
                        src={eDentalinkLogo}
                        className="h-40"
                        alt="eDentalink Logo"
                    />
                </div>
                <form className="p-3 w-full sm:flex-1 flex flex-col gap-y-3 justify-start">
                    <div>
                        <p className="text-sm font-semibold mb-1 text-gray-600">
                            Username
                        </p>
                        <input
                            type="text"
                            placeholder="Enter Username"
                            className="border border-gray-600 rounded-lg w-full py-2 px-4 text-sm inset-shadow-sm inset-shadow-gray-300 focus:outline-primary"
                        />
                    </div>
                    <div className="relative">
                        <p className="text-sm font-semibold  mb-1 text-gray-600">
                            Password
                        </p>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter Password"
                            className="border border-gray-600 rounded-lg w-full py-2 px-4 text-sm inset-shadow-sm inset-shadow-gray-300 focus:outline-primary"
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute right-3 top-11 transform -translate-y-1/2"
                        >
                            {showPassword ? (
                                <EyeIcon className="w-5 h-5 text-gray-500" />
                            ) : (
                                <EyeSlashIcon className="w-5 h-5 text-gray-500" />
                            )}
                        </button>
                    </div>
                    <button
                        onClick={handleLogin}
                        className="bg-primary/90 hover:bg-primary shadow-lg text-white cursor-pointer p-2 text-sm rounded w-full mt-5 font-semibold focus:outline-primary"
                    >
                        Log in
                    </button>
                </form>
            </div>
        </div>
    );
};
