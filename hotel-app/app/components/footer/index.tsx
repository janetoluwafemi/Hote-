import {Clock, Mail, MapPin, Phone} from "lucide-react";
import React from "react";
import { useLanguage, Language } from "@/app/components/languages";
import {useRouter} from "next/navigation";

export const Footer = () => {
    const router = useRouter();
    const { t, language, setLanguage } = useLanguage();

    return (
        <footer className="bg-gray-200 border-t border-gray-200 text-black">
            <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                <div className="sm:col-span-2 lg:col-span-1">
                    <h2 className="text-lg font-semibold mb-3">{t.footer.eliteHotel}</h2>
                    <p className="text-sm text-black leading-relaxed">{t.footer.eliteHotelText}</p>
                </div>
                <div>
                    <h3 className="font-medium mb-4 text-sm uppercase tracking-wider">{t.footer.aboutTitle}</h3>
                    <ul className="space-y-2 text-sm text-black">
                        <li className="hover:opacity-70 transition cursor-pointer">{t.footer.about.ourStory}</li>
                        <li onClick={() => router.push("/user/rooms")} className="hover:opacity-70
                         transition cursor-pointer">{t.footer.about.ourRooms}</li>
                        <li className="hover:opacity-70 transition cursor-pointer">{t.footer.about.locations}</li>
                        <li className="hover:opacity-70 transition cursor-pointer">{t.footer.about.careers}</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-medium mb-4 text-sm uppercase tracking-wider">{t.footer.learnTitle}</h3>
                    <ul className="space-y-2 text-sm text-black">
                        <li className="hover:opacity-70 transition cursor-pointer">{t.footer.learn.faqs}</li>
                        <li className="hover:opacity-70 transition cursor-pointer">{t.footer.learn.bookingGuide}</li>
                        <li className="hover:opacity-70 transition cursor-pointer">{t.footer.learn.cancellationPolicy}</li>
                        <li className="hover:opacity-70 transition cursor-pointer">{t.footer.learn.supportCenter}</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-medium mb-4 text-sm uppercase tracking-wider">{t.footer.join}</h3>
                    <p className="text-xs text-black mb-3 uppercase tracking-tighter">Select Language</p>
                    <select value={language} onChange={(e) => setLanguage(e.target.value as Language)}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm
                             bg-white text-black outline-none focus:ring-1 focus:ring-black">
                        <option value="en">English</option>
                        <option value="yo">Yorùbá</option>
                        <option value="ig">Igbo</option>
                        <option value="fr">French</option>
                        <option value="ko">Korea</option>
                        <option value="zh">Chinese</option>
                    </select>
                </div>
            </div>
            <div className="max-w-6xl bg-gray-200 mx-auto px-6 py-8 border-t border-gray-400 grid grid-cols-1
             sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-black font-medium">
                <div className="flex items-center gap-4"><Phone size={18}/> {t.contact.phone}</div>
                <div className="flex items-center gap-4"><Mail size={18}/> {t.contact.email}</div>
                <div className="flex items-center gap-4"><MapPin size={18}/> {t.contact.location}</div>
                <div className="flex items-center gap-4"><Clock size={18}/> {t.contact.clock}</div>
            </div>
            <div className="bg-gray-200 border-t border-gray-200 py-6">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between
                 items-center gap-4 text-[10px] sm:text-xs text-black">
                    <p className="font-medium">{t.footer.reserved}</p>
                    <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
                        <span className="hover:opacity-60 cursor-pointer transition">{t.footer.privacyPolicy}</span>
                        <span className="hover:opacity-60 cursor-pointer transition">{t.footer.terms}</span>
                        <span className="hover:opacity-60 cursor-pointer transition">{t.footer.bookingRules}</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}