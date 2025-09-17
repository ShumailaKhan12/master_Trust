import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Button from '../../../components/button';
import Logo from "../../../assets/Images/master-logo.png";
import { NavLink } from 'react-router-dom';

const Register = () => {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm();

    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const onSubmit = (data) => {
        console.log("Register Data:", data);
        reset();
    };

    const password = watch("password");

    return (
        <div className="h-screen w-full flex items-center justify-center bg-gradient">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-[350px] md:w-[800px] p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg"
            >
                <div className='flex justify-center items-center'>
                    <img src={Logo} className='h-15 w-50 mb-3' alt="Logo" />
                </div>
                <h2 className="text-2xl font-bold text-white text-center mb-6">
                    Register
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4'>
                    {/* Name */}
                    <div className="mb-4">
                        <label className="block text-sm text-white mb-2">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            {...register("name", { required: "Name is required" })}
                            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                    </div>

                    {/* Phone */}
                    <div className="mb-4">
                        <label className="block text-sm text-white mb-2">Phone No.</label>
                        <input
                            type="tel"
                            placeholder="Enter your phone number"
                            {...register("phone", {
                                required: "Phone number is required",
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: "Invalid phone number",
                                },
                            })}
                            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                        )}
                    </div>

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
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="relative mb-4">
                        <label className="block text-sm text-white mb-2">Password</label>
                        <input
                            type='password'
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
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div className="relative mb-4">
                        <label className="block text-sm text-white mb-2">Confirm Password</label>
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder="Confirm your password"
                            {...register("confirmPassword", {
                                required: "Confirm Password is required",
                                validate: value => value === password || "Passwords do not match",
                            })}
                            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                        />
                        <span
                            className="absolute right-2 top-1/2 translate-y-1/4 cursor-pointer ml-3"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                        </span>
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
                        )}
                    </div>

                </div>
                {/* Button */}
                <Button
                    type="submit"
                    label={loading ? 'Loading...' : 'Sign Up'}
                    className="w-full py-2 rounded-lg bg-blue text-white font-semibold transition mt-8"
                    hoverClass="bg-white/40"
                />

                <p className="text-sm text-center mt-3 mb-0">
                    Already a user ?
                    <NavLink
                        to="/login"
                        className="text-blue text-sm text-decoration-none px-2"
                    >
                        Login Now
                    </NavLink>
                </p>
            </form>
        </div>
    );
};

export default Register;