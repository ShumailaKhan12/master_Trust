import React, { useState } from 'react'

// import Third Party Components
import { useForm } from "react-hook-form";

// Import React Icons
import { FaEye, FaEyeSlash } from 'react-icons/fa';

// Import Common Components
import Button from '../../../components/button';

// Import Images
import Logo from "../../../assets/Images/master-logo.png";


const Login = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    // UseStates
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // Submit handler
    const onSubmit = (data) => {
        // setLoading(true);
        console.log("Form Data:", data);
        reset()
    };
    return (
        <>
            <div className="h-screen w-full flex items-center justify-center bg-gradient">
                {/* Glass Card */}
                <form onSubmit={handleSubmit(onSubmit)} className="w-[350px] md:w-[400px] p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg">

                    <div className='flex justify-center items-center'>
                        <img src={Logo} className='h-15 w-50 mb-3' alt="Logo" />
                    </div>
                    <h2 className="text-2xl font-bold text-white text-center mb-6">
                        Login
                    </h2>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-sm text-white mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email format",
                                },
                            })}
                            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>


                    {/* Password */}
                    <div className="relative">
                        <label className="block text-sm text-white mb-2">Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter your password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message: "Password must be at least 8 characters",
                                },
                            })}
                            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                        />

                        {/* Show/Hide icon */}
                        <span
                            className="absolute right-2 top-1/2 translate-y-1/4 cursor-pointer ml-3"
                            onClick={() => setShowPassword(!showPassword)}
                            style={{ cursor: 'pointer' }}
                        >
                            {showPassword ? (
                                <FaEye size={20} />
                            ) : (
                                <FaEyeSlash size={20} />
                            )}
                        </span>
                    </div>
                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.password.message}
                        </p>
                    )}


                    {/* Button */}
                    <Button
                        type="submit"
                        label={loading ? 'Logging...' : 'Login'}
                        className="w-full py-2 rounded-lg bg-blue text-white font-semibold transition mt-8"
                        hoverClass="bg-white/40"
                    />
                </form>
            </div>

        </>
    );
};

export default Login