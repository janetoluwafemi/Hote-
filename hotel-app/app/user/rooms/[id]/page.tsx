"use client"
import React, {useState} from "react";

import { useRouter, useParams } from "next/navigation";

import { rooms } from "@/app/lib/room";
import { ChevronLeft, Clock, Calendar, Check } from "lucide-react";
import Link from "next/link";
import {Footer} from "@/app/components/footer";
import {useLanguage} from "@/app/components/languages";
import Payment from "@/app/components/payment";

export default function RoomDetails() {
    const { t } = useLanguage();
    const router = useRouter();
    const params = useParams();
    const id = params.id as string;
    const [open, setOpen] = useState(false);
    const room = rooms.find((r) => r.id === id);
    if (!room) {
        console.log("DEBUG PARAM ID:", id);
        console.log("AVAILABLE IDS:", rooms.map(r => r.id));
        return <div>Room not found</div>;
    }
    const bookRoom = () => {
        alert("Room Booked Successfully!");
        router.push("/user/rooms");
    }
    return (
        <div className="min-h-screen bg-gray-200 text-black pb-20 relative overflow-x-hidden">
            {open && (
                <div className="fixed inset-0 z-[1000] flex justify-end">
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                        onClick={() => setOpen(false)}
                    />
                    <div className="relative w-full max-w-md bg-white h-full shadow-2xl animate-in
                     slide-in-from-right duration-300 ease-out">
                        <Payment setOpen={setOpen} />
                    </div>
                </div>
            )}
            <nav className="max-w-6xl mx-auto p-6">
                <Link href="/user/rooms" className="flex items-center gap-2 text-sm uppercase tracking-widest
                text-black hover:text-black transition">
                    <ChevronLeft size={16} /> {t.roomsPage.backCollection}
                </Link>
            </nav>
            <main className="max-w-7xl mx-auto px-6 grid gap-12 items-start lg:grid-cols-2">
                <div className="space-y-4">
                    <div className="overflow-hidden rounded-sm shadow-sm">
                        <img src={room.image} alt={room.name} className="w-full h-[500px] object-cover
                        hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="grid grid-cols-3 gap-2 opacity-60">
                        <div className="h-24 rounded-sm"></div>
                        <div className="h-24 rounded-sm"></div>
                        <div className="h-24 rounded-sm"></div>
                    </div>
                </div>

                <div className="lg:sticky lg:top-10">
                    <span className="text-xs uppercase tracking-[0.2em] text-black font-medium">{t.roomsPage.premiumAccommodation}</span>
                    <h1 className="text-4xl md:text-5xl font-serif mt-2 mb-4 italic">{t.roomsPage.rooms[room.name]}</h1>
                    <p className="text-black leading-relaxed font-light text-lg border-b pb-8">{t.roomsPage.desc}</p>
                    <div className="p-8 rounded-lg shadow-sm mt-8">
                        <h3 className="text-xs uppercase tracking-widest font-bold mb-4">{t.roomsPage.amenities}</h3>
                        <div className="flex gap-3 flex-wrap">
                            {room.features.map((f, i) => (
                                <span key={i} className="flex items-center gap-1.5 border px-4 py-2 rounded-full
                                 text-xs font-medium text-black">
                                    <Check size={12} className="text-black" />
                                    {t.roomsPage.benefits[f]}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="p-8 rounded-lg shadow-sm">
                        <h3 className="text-xs uppercase tracking-widest font-bold mb-6 text-center">{t.roomsPage.inquiryRates}</h3>
                        <div className="space-y-6">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2 text-black">
                                    <Clock size={18} strokeWidth={1.5} />
                                    <span className="text-sm">Short Stay (1hr / 2hr)</span>
                                </div>
                                <span className="font-semibold text-lg">₦{room.price.short1hr} — ₦{room.price.short2hr}</span>
                            </div>
                            <div className="flex justify-between items-center border-t border-gray-900 pt-6">
                                <div className="flex items-center gap-2 text-black">
                                    <Calendar size={18} strokeWidth={1.5} />
                                    <span className="text-sm">Full Stay (Day / Night)</span>
                                </div>
                                <span className="font-semibold text-lg text-stone-700">₦{room.price.day} — ₦{room.price.night}</span>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={() => setOpen(true)}
                            className="w-full mt-8 bg-black text-white py-4 rounded-sm text-sm
                            uppercase tracking-widest hover:bg-zinc-800 transition shadow-lg"
                        >
                            {t.roomsPage.bookRoom}
                        </button>

                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}