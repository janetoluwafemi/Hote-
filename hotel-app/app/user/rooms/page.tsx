"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {rooms} from "@/app/lib/room"
import Link from "next/link";
import {ChevronLeft} from "lucide-react";
import {Footer} from "@/app/components/footer";
import { useLanguage } from "@/app/components/languages";


export default function RoomsPage() {
    const router = useRouter();
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            <nav className="max-w-6xl mx-auto p-6">
                <Link href="/" className="flex items-center gap-2 text-sm uppercase tracking-widest text-gray-400 hover:text-black transition">
                    <ChevronLeft size={16} /> {t.roomsPage.backHome}
                </Link>
            </nav>
            <section className="relative h-[50vh] flex items-center justify-center text-white">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0DC0xZUujGDt7OvGdmPmJoBb3NxVPee-hTQ&s"
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Rooms hero"
                />
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative text-center max-w-2xl px-6">
                    <h1 className="text-4xl md:text-6xl font-light tracking-wide">
                        {t.roomsPage.title}
                    </h1>
                    <p className="mt-4 text-white/80">
                        {t.roomsPage.desc}
                    </p>
                </div>
            </section>
            <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-10">
                    {rooms.map((room, i) => (
                        <div
                            key={i}
                            onClick={() => router.push(`/user/rooms/${room.id}`)}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
                        >
                            <div className="h-56 overflow-hidden">
                                <img
                                    src={room.image}
                                    alt={room.name}
                                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <h2 className="text-xl font-medium">
                                    {t.roomsPage.rooms[room.name]}
                                </h2>
                                <p className="text-sm text-gray-500 mt-1">{t.roomsPage.desc}</p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {room.features.map((f, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs bg-gray-100 px-3 py-1 rounded-full"
                                        >
    {t.roomsPage.benefits[f]}
                    </span>
                                    ))}
                                </div>

                                <div className="mt-6 flex items-center justify-between">
                                    <p className="font-semibold">
                                        1hr ₦{room.price.short1hr} • 2hrs ₦{room.price.short2hr}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Day ₦{room.price.day} • Night ₦{room.price.night}
                                    </p>
                                    <button className="bg-black text-white px-4 py-2 text-sm rounded-full hover:opacity-80 transition">
                                        {t.roomsPage.viewRoom}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="bg-white text-black py-16 text-center">
                <h2 className="text-3xl font-light">{t.roomsPage.helpTitle}</h2>
                <p className="text-white/60 mt-2 text-sm">
                    {t.roomsPage.helpDesc}
                </p>

                <button className="mt-6 bg-black text-white px-6 py-3 rounded-full text-sm hover:scale-105 transition">
                    {t.roomsPage.contactSupport}
                </button>
            </section>
            <Footer></Footer>
        </div>
    );
}