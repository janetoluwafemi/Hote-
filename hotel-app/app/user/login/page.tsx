"use client"
import React, { useState } from 'react';

interface loginData {
    email: string;
    password: string;
}
export default function LoginPage () {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<loginData[]>({
        email: "",
        password: ""
    });
    const [showPassword, setShowPassword] = useState(false);
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        alert("Logged In Successfully!");
        setTimeout(() => setIsLoading(false), 2000);
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                    Welcome Back
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            name="email"
                            type="email"
                            required
                            className="mt-1 block w-full text-black px-3 py-2 border border-gray-300
                             rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="you@example.com"
                            value={data.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            name="password"
                            type={showPassword ? "text" : "password"}
                            required
                            className="mt-1 block w-full text-black px-3 py-2 border border-gray-300
                            rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="••••••••"
                            value={data.password}
                            onChange={handleChange}
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