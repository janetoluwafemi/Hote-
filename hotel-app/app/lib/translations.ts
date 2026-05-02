export type Translation = {
    nav: {
        home: string;
        rooms: string;
        about: string;
        book: string;
    };
    hero: {
        title: string;
        desc: string;
        button: string;
    };
    features: {
        title: string;
        f1: string;
        f1d: string;
        f2: string;
        f2d: string;
        f3: string;
        f3d: string;
    };
    section: {
        title: string;
        desc: string;
        button: string;
    };
    cta: {
        title: string;
        desc: string;
        button: string;
    };
    footer: {
        eliteHotel: string,
        eliteHotelText: string,
        aboutTitle: string,
        learnTitle: string,
        about: {
            ourStory: string;
            ourRooms: string;
            locations: string;
            careers: string;
        }
        learn: {
            faqs: string;
            bookingGuide: string;
            cancellationPolicy: string;
            supportCenter: string;
        };
        join: string;
        reserved: string;
        privacyPolicy: string;
        terms: string;
        bookingRules: string;
    };
    contact: {
        phone: string;
        email: string;
        location: string;
        clock: string;
    };
    roomsPage: {
        title: string;
        desc: string;
        backHome: string;
        viewRoom: string;
        rooms: {
            room1: string,
            room2: string,
            room3: string,
            room4: string,
            room5: string,
            room6: string,
            room7: string,
            room8: string,
            room9: string,
        },
        text: string,
        benefits: {
            wifi: string,
            conditioning: string,
            bathroom: string,
            television: string,
            bed: string
        },
        rates: {
            hour: string;
            day: string;
            night: string;
        };
        helpTitle: string;
        helpDesc: string;
        contactSupport: string;
        amenities: string;
        premiumAccommodation: string;
        backCollection: string;
        inquiryRates: string;
        bookRoom: string
    };
};

export const translations: Record<string, Translation> = {
    en: {
        nav: {
            home: "Home",
            rooms: "Rooms",
            about: "About",
            book: "Book Now"
        },
        hero: {
            title: "Comfortable Stays at a Fair Price",
            desc: "Clean rooms, simple facilities, and a convenient location for travelers and families.",
            button: "View Rooms"
        },
        features: {
            title: "What We Offer",
            f1: "Clean Rooms",
            f1d: "Simple, well-maintained rooms for a comfortable stay.",
            f2: "Affordable Rates",
            f2d: "Budget-friendly pricing suitable for all types of travelers.",
            f3: "Good Location",
            f3d: "Close to transport, shops, and essential services."
        },
        section: {
            title: "Comfortable Rooms for Your Stay",
            desc: "Clean and simple rooms designed for travelers who need comfort, safety, and convenience at a reasonable price.",
            button: "View Details"
        },
        cta: {
            title: "Ready to book your stay?",
            desc: "Check availability and reserve your room in minutes",
            button: "Check Availability"
        },
        footer: {
            eliteHotel: "StayElite Hotel",
            eliteHotelText: " A comfortable stay for travelers and families. Clean rooms, simple amenities, and easy access to transport and nearby services. ",
            aboutTitle: "About Us",
            learnTitle: "Learn More",
            about: {
                ourStory: "Our Story",
                ourRooms: "Our Rooms",
                locations: "Locations",
                careers: "Careers"
            },
            learn: {
                faqs: "FAQs",
                bookingGuide: "Booking Guide",
                cancellationPolicy: "Cancellation Policy",
                supportCenter: "Support Center"
            },
            join: "Join Us",
            reserved: "© 2026 StayElite Hotel. All rights reserved.",
            privacyPolicy: "Privacy Policy",
            terms: "Terms",
            bookingRules: "Booking Rules"
        },
        contact: {
            phone: "+234 814 699 7803",
            email: "eniolaonafujabi@gmail.com",
            location: "City Center Area",
            clock: "Open 24/7"
        },
        roomsPage: {
            title: "Our Rooms",
            desc: "Elegant, clean, and designed for comfort — choose the room that fits your stay.",
            backHome: "Back to Home",
            viewRoom: "View Room",
            rooms: {
                room1: "Room 1",
                room2: "Room 2",
                room3: "Room 3",
                room4: "Room 4",
                room5: "Room 5",
                room6: "Room 6",
                room7: "Room 7",
                room8: "Room 8",
                room9: "Room 9",
            },
            text: "A clean and comfortable room for solo travelers or short stays.",
            benefits: {
                wifi: "Free WiFi",
                conditioning: "Air Conditioning",
                bathroom: "Private Bathroom",
                television: "Television",
                bed: "Bed"
            },
            rates: { hour: "hr", day: "Day", night: "Night" },
            helpTitle: "Need help choosing a room?",
            helpDesc: "Contact us and we’ll help you pick the perfect stay.",
            contactSupport: "Contact Support",
            amenities: "Amenities",
            premiumAccommodation: "Premium Accommodation",
            backCollection: "Back to Collection",
            inquiryRates: "Inquiry & Rates",
            bookRoom: "Book Room"
        }
    },
    yo: {
        nav: {
            home: "Ile",
            rooms: "Yara",
            about: "Nipa",
            book: "Ṣe Iṣura"
        },
        hero: {
            title: "Iduro Itura ni Iye To Dara",
            desc: "Yara mimọ, iṣẹ rọrun, ati ipo to rọrùn fun awọn arinrin-ajo.",
            button: "Wo Yara"
        },
        features: {
            title: "Ohun ti A N Pese",
            f1: "Yara Mimọ",
            f1d: "Yara to mọ́ ati tito fun itunu.",
            f2: "Iye Kere",
            f2d: "Owo ti o din owo fun gbogbo eniyan.",
            f3: "Ipo Dara",
            f3d: "Sunmọ ọkọ, ile itaja ati awọn iṣẹ."
        },
        section: {
            title: "Yara Itura Fun Iduro Rẹ",
            desc: "Yara to mọ́ ati rọrun fun itunu ati aabo.",
            button: "Wo Die"
        },
        cta: {
            title: "Ṣetan lati ṣa ibugbe?",
            desc: "Ṣayẹwo ati ṣa yara rẹ ni iṣẹju diẹ",
            button: "Ṣayẹwo"
        },
        footer: {
            eliteHotel: "Hotẹẹli StayElite",
            eliteHotelText: "Iduro itura fun awọn arinrin-ajo ati awọn idile. Yara mimọ, awọn ohun elo rọrun, ati irọrun wiwọle si ọkọ ati awọn iṣẹ to wa nitosi.",
            aboutTitle: "Nipa Wa",
            learnTitle: "Kọ Diẹ sii",
            about: {
                ourStory: "Itan Wa",
                ourRooms: "Yara Wa",
                locations: "Ibi Wa",
                careers: "Iṣẹ"
            },
            learn: {
                faqs: "Awọn ibeere ti a beere nigbagbogbo",
                bookingGuide: "Itọsọna Ibere",
                cancellationPolicy: "Ilana Ikawe",
                supportCenter: "Ile-iṣẹ Atilẹyin"
            },
            join: "Darapọ mọ Wa",
            reserved: "© 2026 StayElite Hotel. Gbogbo ẹtọ wa ni ipamọ.",
            privacyPolicy: "Ilana Asiri",
            terms: "Awọn ofin",
            bookingRules: "Awọn ilana Iṣura"
        },
        contact: {
            phone: "+234 814 699 7803",
            email: "eniolaonafujabi@gmail.com",
            location: "Aarin Ilu",
            clock: "Ṣí 24/7"
        },
        roomsPage: {
            title: "Àwọn Yàrá Wa",
            desc: "Ẹlẹ́wà, mímọ́, tí a ṣe fún ìtùnú — yan yàrá tó bá ìdúró rẹ mu.",
            backHome: "Padà sí Ilé",
            viewRoom: "Wo Yàrá",
            rooms: {
                room1: "Yàrá 1",
                room2: "Yàrá 2",
                room3: "Yàrá 3",
                room4: "Yàrá 4",
                room5: "Yàrá 5",
                room6: "Yàrá 6",
                room7: "Yàrá 7",
                room8: "Yàrá 8",
                room9: "Yàrá 9",
            },
            text: "Yàrá mímọ́ àti itunu fún ẹni kàn tàbí ìdúró kúkúrú.",
            benefits: {
                wifi: "WiFi Ọfẹ",
                conditioning: "Ẹrọ Itutu Afẹ́fẹ́",
                bathroom: "Balùwẹ̀ Aládáni",
                television: "Tẹlifíṣọ̀n",
                bed: "Ibùsùn"
            },
            rates: { hour: "wákàtí", day: "Ọjọ́", night: "Alẹ́" },
            helpTitle: "Ṣé o nílò ìrànlọ́wọ́ láti yan yàrá?",
            helpDesc: "Kan sí wa, a ó ran ọ lọ́wọ́ láti yan ibi tó pé.",
            contactSupport: "Kan sí Ìtìlẹ́yìn",
            amenities: "Awọn ohun elo",
            premiumAccommodation: "Ibugbe Didara Giga",
            backCollection: "Pada si Gbigba",
            inquiryRates: "Ìbéèrè & Oṣuwọn",
            bookRoom: "Ṣe ìforúkọsílẹ Yara"
        }
    },
    ig: {
        nav: {
            home: "Ụlọ",
            rooms: "Ụlọ Ihi",
            about: "Banyere Anyị",
            book: "Debe Ugbu A"
        },
        hero: {
            title: "Nọrọ nke ọma na ọnụ ahịa dị mma",
            desc: "Ụlọ dị ọcha, ọrụ dị mfe, na ebe dị mma maka ndị njem na ezinụlọ.",
            button: "Lee Ụlọ"
        },
        features: {
            title: "Ihe Anyị Na-enye",
            f1: "Ụlọ Dị Ọcha",
            f1d: "Ụlọ dị mfe ma dị ọcha maka ntụsara ahụ.",
            f2: "Ọnụ Ahịa Dị Ala",
            f2d: "Ọnụ ahịa dị ọnụ ala maka ụdị ndị njem niile.",
            f3: "Ebe Dị Mma",
            f3d: "Nso njem, ụlọ ahịa na ọrụ dị mkpa."
        },
        section: {
            title: "Ụlọ dị mma maka ịnọ gị",
            desc: "Ụlọ dị ọcha na nke dị mfe maka ndị chọrọ ntụsara ahụ na nchekwa.",
            button: "Lee Nkọwa"
        },
        cta: {
            title: "Ị dị njikere idobe?",
            desc: "Lelee ohere ma debe ụlọ gị n'ime nkeji ole na ole",
            button: "Lelee"
        },
        footer: {
            eliteHotel: "StayElite Hotel",
            eliteHotelText: "Nọrọnụ nke ọma maka ndị njem na ezinụlọ. Ụlọ dị ọcha na ọrụ dị mfe.",
            aboutTitle: "Banyere Anyị",
            learnTitle: "Mụta More",
            about: {
                ourStory: "Akụkọ Anyị",
                ourRooms: "Ụlọ Anyị",
                locations: "Ebe Anyị",
                careers: "Ọrụ"
            },
            learn: {
                faqs: "Ajụjụ",
                bookingGuide: "Ntuziaka Ịde",
                cancellationPolicy: "Iwu Kagbuo",
                supportCenter: "Ụlọ Enyemaka"
            },
            join: "Sonye Anyị",
            reserved: "© 2026 StayElite Hotel. Ikike niile echekwabara.",
            privacyPolicy: "Iwu Nzuzo",
            terms: "Usoro",
            bookingRules: "Iwu Ndobe"
        },
        contact: {
            phone: "+234 814 699 7803",
            email: "eniolaonafujabi@gmail.com",
            location: "Etiti Obodo",
            clock: "Mepee 24/7"
        },
        roomsPage: {
            title: "Ụlọ Anyị",
            desc: "Mara mma, dị ọcha, ma hazie maka nkasi obi — họrọ ụlọ dabara gị.",
            backHome: "Laghachi n’ụlọ",
            viewRoom: "Lee Ụlọ",
            rooms: {
                room1: "Ụlọ 1",
                room2: "Ụlọ 2",
                room3: "Ụlọ 3",
                room4: "Ụlọ 4",
                room5: "Ụlọ 5",
                room6: "Ụlọ 6",
                room7: "Ụlọ 7",
                room8: "Ụlọ 8",
                room9: "Ụlọ 9",
            },
            text: "Ụlọ dị ọcha ma dị mma maka onye otu ma ọ bụ oge dị mkpirikpi.",
            benefits: {
                wifi: "WiFi N'efu",
                conditioning: "Igwe oyi",
                bathroom: "Ime ụlọ ịsa ahụ nke onwe",
                television: "Tivị",
                bed: "Akwa"
            },
            rates: { hour: "awa", day: "ụbọchị", night: "abalị" },
            helpTitle: "Ị chọrọ enyemaka ịhọrọ ụlọ?",
            helpDesc: "Kpọtụrụ anyị, anyị ga-enyere gị ịhọrọ nke kacha mma.",
            contactSupport: "Kpọtụrụ Nkwado",
            amenities: "Ngwa ụlọ",
            premiumAccommodation: "Ụlọ obibi dị elu",
            backCollection: "Laghachi na nchịkọta",
            inquiryRates: "Ajụjụ & Ọnụahịa",
            bookRoom: "Debe ụlọ"
        }
    },
    fr: {
        nav: {
            home: "Accueil",
            rooms: "Chambres",
            about: "À propos",
            book: "Réserver"
        },
        hero: {
            title: "Séjours confortables à prix abordable",
            desc: "Chambres propres, installations simples et emplacement pratique pour voyageurs et familles.",
            button: "Voir les chambres"
        },
        features: {
            title: "Ce que nous offrons",
            f1: "Chambres propres",
            f1d: "Chambres simples et bien entretenues pour un séjour confortable.",
            f2: "Prix abordables",
            f2d: "Tarifs économiques adaptés à tous les voyageurs.",
            f3: "Bon emplacement",
            f3d: "Proche des transports, commerces et services essentiels."
        },
        section: {
            title: "Chambres confortables pour votre séjour",
            desc: "Chambres propres et simples conçues pour offrir confort, sécurité et commodité.",
            button: "Voir les détails"
        },
        cta: {
            title: "Prêt à réserver votre séjour ?",
            desc: "Vérifiez la disponibilité et réservez en quelques minutes",
            button: "Vérifier"
        },
        footer: {
            eliteHotel: "StayElite Hôtel",
            eliteHotelText: "Séjours confortables pour voyageurs et familles avec services simples et propres.",
            aboutTitle: "À propos",
            learnTitle: "En savoir plus",
            about: {
                ourStory: "Notre histoire",
                ourRooms: "Nos chambres",
                locations: "Emplacements",
                careers: "Carrières"
            },
            learn: {
                faqs: "FAQ",
                bookingGuide: "Guide de réservation",
                cancellationPolicy: "Politique d'annulation",
                supportCenter: "Centre d'aide"
            },
            join: "Rejoignez-nous",
            reserved: "© 2026 StayElite Hôtel. Tous droits réservés.",
            privacyPolicy: "Politique de confidentialité",
            terms: "Conditions",
            bookingRules: "Règles de réservation"
        },
        contact: {
            phone: "+234 814 699 7803",
            email: "eniolaonafujabi@gmail.com",
            location: "Centre-ville",
            clock: "Ouvert 24h/24"
        },
        roomsPage: {
            title: "Nos Chambres",
            desc: "Élégantes, propres et conçues pour le confort — choisissez la chambre idéale pour votre séjour.",
            backHome: "Retour à l'accueil",
            viewRoom: "Voir la chambre",
            rooms: {
                room1: "Chambre 1",
                room2: "Chambre 2",
                room3: "Chambre 3",
                room4: "Chambre 4",
                room5: "Chambre 5",
                room6: "Chambre 6",
                room7: "Chambre 7",
                room8: "Chambre 8",
                room9: "Chambre 9",
            },
            text: "Une chambre propre et confortable pour les voyageurs seuls ou les courts séjours.",
            benefits: {
                wifi: "Wi-Fi gratuit",
                conditioning: "Climatisation",
                bathroom: "Salle de bain privée",
                television: "Télévision",
                bed: "Lit"
            },
            rates: { hour: "heure", day: "jour", night: "nuit" },
            helpTitle: "Besoin d’aide pour choisir une chambre ?",
            helpDesc: "Contactez-nous et nous vous aiderons à trouver le séjour parfait.",
            contactSupport: "Contacter le support",
            amenities: "Équipements",
            premiumAccommodation: "Hébergement Premium",
            backCollection: "Retour à la liste",
            inquiryRates: "Demande & Tarifs",
            bookRoom: "Réserver une chambre"
        },
    },
    ko: {
        nav: {
            home: "홈",
            rooms: "객실",
            about: "소개",
            book: "지금 예약"
        },
        hero: {
            title: "합리적인 가격의 편안한 숙박",
            desc: "깨끗한 객실, 간단한 시설, 여행자와 가족에게 편리한 위치를 제공합니다.",
            button: "객실 보기"
        },
        features: {
            title: "우리가 제공하는 것",
            f1: "깨끗한 객실",
            f1d: "편안한 숙박을 위한 깔끔하게 관리된 객실입니다.",
            f2: "합리적인 가격",
            f2d: "모든 여행자에게 적합한 저렴한 요금입니다.",
            f3: "좋은 위치",
            f3d: "교통, 상점 및 주요 시설과 가까운 위치입니다."
        },
        section: {
            title: "편안한 숙박을 위한 객실",
            desc: "편안함, 안전, 편리함을 제공하는 깨끗하고 단순한 객실입니다.",
            button: "자세히 보기"
        },
        cta: {
            title: "예약할 준비가 되셨나요?",
            desc: "몇 분 안에 객실 가능 여부를 확인하고 예약하세요",
            button: "확인하기"
        },
        footer: {
            eliteHotel: "StayElite 호텔",
            eliteHotelText: "여행자와 가족을 위한 편안한 숙박. 깨끗한 객실과 간단한 서비스 제공.",
            aboutTitle: "회사 소개",
            learnTitle: "더 알아보기",
            about: {
                ourStory: "우리 이야기",
                ourRooms: "객실 소개",
                locations: "위치",
                careers: "채용"
            },
            learn: {
                faqs: "자주 묻는 질문",
                bookingGuide: "예약 안내",
                cancellationPolicy: "취소 정책",
                supportCenter: "고객 지원 센터"
            },
            join: "함께하기",
            reserved: "© 2026 StayElite 호텔. 모든 권리 보유.",
            privacyPolicy: "개인정보 정책",
            terms: "이용 약관",
            bookingRules: "예약 규정"
        },
        contact: {
            phone: "+234 814 699 7803",
            email: "eniolaonafujabi@gmail.com",
            location: "도심 지역",
            clock: "24시간 운영"
        },
        roomsPage: {
            title: "객실 안내",
            desc: "우아하고 깔끔하며 편안함을 위해 설계되었습니다 — 당신에게 맞는 객실을 선택하세요.",
            backHome: "홈으로 돌아가기",
            viewRoom: "객실 보기",
            rooms: {
                room1: "객실 1",
                room2: "객실 2",
                room3: "객실 3",
                room4: "객실 4",
                room5: "객실 5",
                room6: "객실 6",
                room7: "객실 7",
                room8: "객실 8",
                room9: "객실 9",
            },
            text: "혼자 여행하거나 짧은 숙박에 적합한 깨끗하고 편안한 객실입니다.",
            benefits: {
                wifi: "무료 와이파이",
                conditioning: "에어컨",
                bathroom: "개인 욕실",
                television: "텔레비전",
                bed: "침대"
            },
            rates: { hour: "시간", day: "일", night: "밤" },
            helpTitle: "객실 선택에 도움이 필요하신가요?",
            helpDesc: "문의하시면 최적의 객실 선택을 도와드립니다.",
            contactSupport: "고객 지원 문의",
            amenities: "편의 시설",
            premiumAccommodation: "프리미엄 숙박",
            backCollection: "목록으로 돌아가기",
            inquiryRates: "문의 및 요금",
            bookRoom: "객실 예약"
        }
    },
    zh: {
        nav: {
            home: "首页",
            rooms: "房间",
            about: "关于我们",
            book: "立即预订"
        },
        hero: {
            title: "舒适住宿，价格合理",
            desc: "干净的房间、简单的设施，适合旅客和家庭入住。",
            button: "查看房间"
        },
        features: {
            title: "我们提供",
            f1: "干净房间",
            f1d: "简单整洁的房间，让您舒适入住。",
            f2: "实惠价格",
            f2d: "适合所有旅客的经济价格。",
            f3: "优越位置",
            f3d: "靠近交通、商店和生活设施。"
        },
        section: {
            title: "为您提供舒适的房间",
            desc: "干净简洁的房间，为旅客提供舒适、安全和便利的住宿体验。",
            button: "查看详情"
        },
        cta: {
            title: "准备预订了吗？",
            desc: "查看空房并在几分钟内完成预订",
            button: "立即查看"
        },
        footer: {
            eliteHotel: "StayElite 酒店",
            eliteHotelText: "为旅客和家庭提供舒适住宿，干净房间与便捷服务。",
            aboutTitle: "关于我们",
            learnTitle: "了解更多",
            about: {
                ourStory: "我们的故事",
                ourRooms: "我们的房间",
                locations: "地点",
                careers: "职业"
            },
            learn: {
                faqs: "常见问题",
                bookingGuide: "预订指南",
                cancellationPolicy: "取消政策",
                supportCenter: "支持中心"
            },
            join: "加入我们",
            reserved: "© 2026 StayElite 酒店。版权所有。",
            privacyPolicy: "隐私政策",
            terms: "条款",
            bookingRules: "预订规则"
        },
        contact: {
            phone: "+234 814 699 7803",
            email: "eniolaonafujabi@gmail.com",
            location: "市中心",
            clock: "全天 24 小时开放"
        },
        roomsPage: {
            title: "我们的房间",
            desc: "优雅、整洁，为舒适而设计 —— 选择最适合您的房间。",
            backHome: "返回首页",
            viewRoom: "查看房间",
            rooms: {
                room1: "房间 1",
                room2: "房间 2",
                room3: "房间 3",
                room4: "房间 4",
                room5: "房间 5",
                room6: "房间 6",
                room7: "房间 7",
                room8: "房间 8",
                room9: "房间 9",
            },
            text: "干净舒适，适合单人或短期入住。",
            benefits: {
                wifi: "免费WiFi",
                conditioning: "空调",
                bathroom: "独立浴室",
                television: "电视",
                bed: "床"
            },
            rates: { hour: "小时", day: "天", night: "晚" },
            helpTitle: "需要帮助选择房间吗？",
            helpDesc: "联系我们，我们会帮您选择最合适的房间。",
            contactSupport: "联系客服",
            amenities: "设施",
            premiumAccommodation: "高端住宿",
            backCollection: "返回列表",
            inquiryRates: "咨询与价格",
            bookRoom: "预订房间"
        }
    }
};
