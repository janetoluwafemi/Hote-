"use client";
import React from "react";

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
};

export default function PaymentSuccessModal({ open, setOpen }: Props) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white w-[350px] rounded-2xl shadow-xl p-6 text-center animate-in fade-in zoom-in duration-200">
                <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-green-100 mb-4">
                    <svg
                        className="w-8 h-8 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h2 className="text-lg font-semibold">Payment Successful!</h2>
                <p className="text-sm text-gray-500 mt-1">
                    Your booking has been confirmed.
                </p>
                <div className="flex gap-3 mt-6">
                    <button
                        onClick={() => setOpen(false)}
                        className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => setOpen(false)}
                        className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
}