"use client"
import React, { useState } from 'react';

type signUpData = {
    username: string;
    phoneNumber: string
    email: string;
    password: string;
}
export default function SignUpPage () {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<signUpData>({
        username: "",
        phoneNumber: "",
        email: "",
        password: ""
    });
    const handleSignUpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        alert("Signed In Successfully!");
        setTimeout(() => setIsLoading(false), 2000);
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                    Sign In
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">User Name</label>
                        <input
                            name="username"
                            type="text"
                            required
                            className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md
                             shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="you@example.com"
                            value={data.username}
                            onChange={handleSignUpChange}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            name="phoneNumber"
                            type="tel"
                            required
                            className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md
                             shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="you@example.com"
                            value={data.phoneNumber}
                            onChange={handleSignUpChange}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            name="email"
                            type="email"
                            required
                            className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md
                             shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="you@example.com"
                            value={data.email}
                            onChange={handleSignUpChange}
                        />
                    </div>
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            name="password"
                            type={showPassword ? "text" : "password"}
                            required
                            className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md
                            shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="••••••••"
                            value={data.password}
                            onChange={handleSignUpChange}
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-0 pr-3 pt-6 flex items-center text-sm leading-5
                             text-indigo-600 hover:text-indigo-500"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full flex justify-center py-2 px-4 border border-transparent
                         rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700
                          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                    >
                        {isLoading ? "Signing in..." : "Sign In"}
                    </button>
                </form>
                <p className="mt-6 text-center text-sm text-gray-600">
                    Don't have an account?{' '}
                    <a href="/user/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
};