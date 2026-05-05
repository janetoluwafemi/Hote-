"use client"
import React, { useState } from "react";
import { Menu, X, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import {Footer} from "@/app/components/footer";
import { useLanguage } from "@/app/components/languages";
import {reviews} from "@/app/lib/reviews"

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    const { t } = useLanguage();
    const login = () => {
        router.push("/user/login");
    }

    return (
        <div className="font-sans text-gray-900 overflow-x-hidden">
            <section className="relative min-h-[70vh] md:min-h-[60vh] py-20 flex items-center justify-center text-white">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3j7gfv_1dZuI0JuWnR4HCmC_Cxwwgha4pAA&s"
                    alt="hotel room"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-6 md:px-10 py-6 z-50">
                    <h1 className="text-xl md:text-2xl font-semibold tracking-wide">
                        StayElite Hotel
                    </h1>
                    <div className="hidden md:flex items-center space-x-8 text-sm">
                        <a href="/" className="hover:opacity-70 transition">{t.nav.home}</a>
                        <a href="/user/rooms" className="hover:opacity-70 transition">{t.nav.rooms}</a>
                        <a href="#" className="hover:opacity-70 transition">{t.nav.about}</a>
                        <button onClick={login} className="border border-white/40 px-5 py-2 rounded-full
                         hover:bg-white hover:text-black transition duration-300">
                            {t.nav.book}
                        </button>
                    </div>
                    <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </nav>
                {isMenuOpen && (
                    <div className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center
                     space-y-8 text-2xl font-light md:hidden">
                        <a href="#" onClick={() => setIsMenuOpen(false)}>{t.nav.home}</a>
                        <a href="#" onClick={() => setIsMenuOpen(false)}>{t.nav.rooms}</a>
                        <a href="#" onClick={() => setIsMenuOpen(false)}>{t.nav.about}</a>
                        <button className="bg-white text-black px-10 py-3 rounded-full text-lg">
                            {t.nav.book}
                        </button>
                    </div>
                )}
                <div className="relative z-10 text-center max-w-4xl px-6">
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-light leading-tight mb-6">
                        {t.hero.title}
                    </h2>
                    <p className="text-base md:text-lg opacity-80 mb-8 max-w-xl mx-auto">
                        {t.hero.desc}
                    </p>
                    <button
                        onClick={() => router.push("/user/rooms")}
                        className="bg-white text-black px-8 py-4 rounded-full text-sm tracking-wide
                         hover:scale-105 transition-transform duration-300">
                        {t.hero.button}
                    </button>
                </div>
            </section>
            <section className="py-20 px-6 md:px-10 bg-gray-200 text-center">
                <h3 className="text-3xl md:text-4xl font-light mb-12 md:mb-16">
                    {t.features.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 max-w-6xl
                 mx-auto text-left md:text-center">
                    <div>
                        <h4 className="text-xl mb-3 font-medium">{t.features.f1}</h4>
                        <p className="text-gray-500 text-sm md:text-base">{t.features.f1d}</p>
                    </div>
                    <div>
                        <h4 className="text-xl mb-3 font-medium">{t.features.f2}</h4>
                        <p className="text-gray-500 text-sm md:text-base">{t.features.f2d}</p>
                    </div>
                    <div className="sm:col-span-2 md:col-span-1">
                        <h4 className="text-xl mb-3 font-medium">{t.features.f3}</h4>
                        <p className="text-gray-500 text-sm md:text-base">{t.features.f3d}</p>
                    </div>
                </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 bg-white">
                <div className="h-64 md:h-auto order-1 md:order-none">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_WcvLXJ0dVw-DUwpgbQERbMhLnCglbWzdAQ&s"
                        alt="hotel room"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex items-center justify-center p-8 sm:p-12 md:p-20 bg-gray-200 order-2">
                    <div className="max-w-md">
                        <h3 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900">
                            {t.section.title}
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                            {t.section.desc}
                        </p>
                        <button
                            className="border border-gray-300 px-6 py-3 rounded-md text-sm hover:bg-gray-900
                             hover:text-white transition-colors duration-300">
                            {t.section.button}
                        </button>
                    </div>
                </div>
            </section>
            <section className="py-20 px-6 md:px-10 bg-gray-200">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-3xl font-light text-center mb-16 text-gray-900">Guest Reviews</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reviews.map((review) => (
                            <div key={review.id} className="p-6 bg-gray-100 rounded-xl border border-gray-100">
                                <div className="flex items-center space-x-4 mb-4">
                                    <img src={review.img} alt={review.name} className="w-12 h-12
                                    rounded-full object-cover" />
                                    <div>
                                        <h4 className="text-sm font-semibold">{review.name}</h4>
                                        <div className="flex text-yellow-500"><Star size={12} fill="currentColor" />
                                            <Star size={12} fill="currentColor" /> <Star size={12} fill="currentColor" />
                                            <Star size={12} fill="currentColor" /> <Star size={12} fill="currentColor" /></div>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm italic leading-relaxed">"{review.text}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 text-center bg-gray-900 text-white">
                <h3 className="text-2xl md:text-3xl font-medium mb-3">
                    {t.cta.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm">
                    {t.cta.desc}
                </p>
                <button className="bg-white text-gray-900 px-8 py-3 rounded-md text-sm font-medium
                hover:opacity-90 transition">
                    {t.cta.button}
                </button>
            </section>
            <Footer></Footer>
        </div>
    )
};