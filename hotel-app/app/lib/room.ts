export type Room = {
    id: string;
    name: string;
    price: {
        short1hr: number;
        short2hr: number;
        day: number;
        night: number;
    };
    desc: string;
    image: string;
    features: string[];
};

export const rooms: Room[] = [
    {
        id: "1",
        name: "room1",
        price: {
            short1hr: 2500,
            short2hr: 4000,
            day: 10000,
            night: 9000,
        },
        desc: "A clean and comfortable room for solo travelers or short stays.",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqn-pgLc08Jy-RLSoG02UMwNhyL_tc36F9-Q&s",
        features: ["wifi", "conditioning", "bathroom", "television", "bed"]
    },
    {
        id: "2",
        name: "room2",
        price: {
            short1hr: 2500,
            short2hr: 4000,
            day: 10000,
            night: 9000,
        },
        desc: "A clean and comfortable room for solo travelers or short stays.",
        image:
            "https://www.shutterstock.com/image-photo/generic-hotelmotel-room-queensize-bed-260nw-26439199.jpg",
        features: ["wifi", "conditioning", "bathroom", "television", "bed"]
    },
    {
        id: "3",
        name: "room3",
        price: {
            short1hr: 2500,
            short2hr: 4000,
            day: 10000,
            night: 9000,
        },
        desc: "A clean and comfortable room for solo travelers or short stays.",
        image:
            "https://c8.alamy.com/comp/2F57R2R/a-room-in-a-cheap-hotel-minimalistic-interior-of-an-economy-class-hotel-room-overnight-stay-for-the-traveler-several-beds-and-a-table-2F57R2R.jpg",
        features: ["wifi", "conditioning", "bathroom", "television", "bed"]
    },
    {
        id: "4",
        name: "room4",
        price: {
            short1hr: 2500,
            short2hr: 4000,
            day: 10000,
            night: 9000,
        },
        desc: "A clean and comfortable room for solo travelers or short stays.",
        image:
            "https://media.gettyimages.com/id/1446351448/photo/interior-view-of-a-small-room-with-a-bed-in-a-house.jpg?s=612x612&w=gi&k=20&c=qkzdHrxGwa_pW4JQSonC3aq7PC1l2Dg-gO2WrMX2qxA=",
        features: ["wifi", "conditioning", "bathroom", "television", "bed"]
    },
    {
        id: "5",
        name: "room5",
        price: {
            short1hr: 2500,
            short2hr: 4000,
            day: 10000,
            night: 9000,
        },
        desc: "A clean and comfortable room for solo travelers or short stays.",
        image:
            "https://media-cdn.tripadvisor.com/media/photo-s/01/44/0a/87/poor-room.jpg",
        features: ["wifi", "conditioning", "bathroom", "television", "bed"]
    },
    {
        id: "6",
        name: "room6",
        price: {
            short1hr: 2500,
            short2hr: 4000,
            day: 10000,
            night: 9000,
        },
        desc: "A clean and comfortable room for solo travelers or short stays.",
        image:
            "https://thumbs.dreamstime.com/z/aurangabad-india-february-doble-bed-room-hotel-aurangabad-maharasthra-state-ind-aurangabad-india-february-doble-bed-room-188458516.jpg",
        features: ["wifi", "conditioning", "bathroom", "television", "bed"]
    },
    {
        id: "7",
        name: "room7",
        price: {
            short1hr: 2500,
            short2hr: 4000,
            day: 10000,
            night: 9000,
        },
        desc: "A clean and comfortable room for solo travelers or short stays.",
        image:
            "https://www.shutterstock.com/image-photo/towel-bedding-on-single-bed-600nw-1547216456.jpg",
        features: ["wifi", "conditioning", "bathroom", "television", "bed"]
    },
    {
        id: "8",
        name: "room8",
        price: {
            short1hr: 2500,
            short2hr: 4000,
            day: 10000,
            night: 9000,
        },
        desc: "A clean and comfortable room for solo travelers or short stays.",
        image:
            "https://thumbs.dreamstime.com/b/cozy-hotel-room-neatly-made-bed-simple-decor-soft-colors-features-comfortable-white-linens-wooden-headboard-small-419925832.jpg",
        features: ["wifi", "conditioning", "bathroom", "television", "bed"]
    },
    {
        id: "9",
        name: "room9",
        price: {
            short1hr: 2500,
            short2hr: 4000,
            day: 10000,
            night: 9000,
        },
        desc: "A clean and comfortable room for solo travelers or short stays.",
        image:
            "https://thumbs.dreamstime.com/b/typical-mid-range-hotel-room-36299.jpg",
        features: ["wifi", "conditioning", "bathroom", "television", "bed"]
    }
];