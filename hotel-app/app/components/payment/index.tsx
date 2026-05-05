"use client"
import React, { useState } from "react";
import PaymentSuccessModal from "@/app/components/confirmation";

interface paymentProps {
    setOpen: (open: boolean) => void;
}
const pricingOptions = [
    { label: "1 Hour", value: "1hr", price: 2500 },
    { label: "2 Hours", value: "2hr", price: 4000 },
    { label: "12:00 - 11:30", value: "Full Day", price: 10000 },
    { label: "10:00 - 10:00", value: "Not Full Day", price: 9000 },
];
export default function Payment({ setOpen }: paymentProps) {
    const [form, setForm] = useState({
        name: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    const [selected, setSelected] = useState(pricingOptions[0]);
    const [success, setSuccess] = useState(false);
    return (
        <div className="flex flex-col h-full bg-white p-8">
            <div className="flex justify-between items-center mb-10">
                <h2 className="text-2xl font-serif italic">Checkout</h2>
                <button
                    onClick={() => setOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition"
                >
                    <span className="text-xl">✕</span>
                </button>
            </div>

            <div className="flex-grow space-y-6">
                <div className="space-y-4">
                    <label className="text-xs uppercase tracking-widest text-gray-500">Card Details</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Cardholder Name"
                        className="w-full border-b border-gray-300 py-3
                        focus:border-black outline-none transition"
                        onChange={handleChange}
                        value={form.name}
                        required
                    />
                    <input
                        type="tel"
                        name="cardNumber"
                        placeholder="0000 0000 0000 0000"
                        className="w-full border-b border-gray-300 py-3
                        focus:border-black outline-none transition"
                        onChange={handleChange}
                        value={form.cardNumber}
                        required
                    />
                    <div className="flex gap-4">
                        <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-1/2 border-b border-gray-300 py-3
                            focus:border-black outline-none transition"
                            onChange={handleChange}
                            name="expiry"
                            value={form.expiry}
                            required
                        />
                        <input
                            type="password"
                            placeholder="CVV"
                            className="w-1/2 border-b border-gray-300 py-3
                            focus:border-black outline-none transition"
                            onChange={handleChange}
                            name="cvv"
                            value={form.cvv}
                            required
                        />
                    </div>
                </div>
            </div>

            <div className="border-t pt-6 space-y-4">
                <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-600">
                        Select Duration
                    </label>

                    <select
                        className="w-full border rounded-lg p-3
                         focus:ring-2 focus:ring-blue-500 outline-none"
                        value={selected.value}
                        onChange={(e) => {
                            const option = pricingOptions.find(
                                (p) => p.value === e.target.value
                            );
                            if (option) setSelected(option);
                        }}
                    >
                        {pricingOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label} — ₦{option.price.toLocaleString()}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex justify-between font-bold text-xl tracking-tight">
                    <span>Total</span>
                    <span>₦{selected.price.toLocaleString()}</span>
                </div>
                <button
                    onClick={() => setSuccess(true)}
                    className="w-full bg-black text-white py-4 rounded-sm text-sm uppercase
                     tracking-widest hover:bg-zinc-800 transition shadow-xl mt-4">
                    Complete Booking
                </button>
                <PaymentSuccessModal open={success} setOpen={setSuccess} />
            </div>
        </div>
    );
}