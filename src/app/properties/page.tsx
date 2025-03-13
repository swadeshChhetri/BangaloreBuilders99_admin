'use client';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import Link from 'next/link';
import UserSidebar from '@/components/Sidebar';
// import { MessageCircle, X, Send } from 'lucide-react';

const properties = [
  {
    id: 1,
    image: "/images/house1.jpg",
    price: "₹ 60 L",
    title: "2 BHK Independent House",
    location: "In Nisarga Layout, Hoskote",
    posted: "Posted by Owner - 3 months ago",
  },
  {
    id: 2,
    image: "/images/house2.jpg",
    price: "₹ 1.49 Cr",
    title: "2 BHK Apartment, 3 Baths",
    location: "In Prestige Lakeside Habitat, Gunjur",
    posted: "Posted by Owner - 2 weeks ago",
  },
  {
    id: 3,
    image: "/images/house3.jpg",
    price: "₹ 14.4 L",
    title: "Land",
    location: "In Seegahalli, Bangalore",
    posted: "Posted by Owner - 2 months ago",
  },
  {
    id: 4,
    image: "/images/house4.jpg",
    price: "₹ 1.8 Cr",
    title: "Land",
    location: "In Munnekollal, Old Airport Road",
    posted: "Posted by Owner",
  },
  {
    id: 5,
    image: "/images/house5.jpg",
    price: "₹ 60 L",
    title: "2 BHK Independent House",
    location: "In Nisarga Layout, Hoskote",
    posted: "Posted by Owner - 3 months ago",
  },
  {
    id: 6,
    image: "/images/house6.jpg",
    price: "₹ 1.49 Cr",
    title: "2 BHK Apartment, 3 Baths",
    location: "In Prestige Lakeside Habitat, Gunjur",
    posted: "Posted by Owner - 2 weeks ago",
  },
];


export default function Home() {
  const [liked, setLiked] = useState<Record<number, boolean>>({});
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const scrollAmount = 300;

  const toggleLike = (id: number) => {
    setLiked((prev) => ({ ...prev, [id]: !(prev[id] || false) }));
  };

  const scrollLeft = () => {
    setScrollPosition((prev) => Math.max(prev - scrollAmount, 0));
  };

  const scrollRight = () => {
    setScrollPosition((prev) => Math.min(prev + scrollAmount, properties.length * 250));
  };


  return (
    <>
      <div className="flex">
        <UserSidebar />
        <div className="ml-72 p-4 shadow-md rounded-lg w-[75%]">
          <div className="w-full p-6 pt-20">
            <h2 className="text-2xl font-bold">Recommended Properties</h2>
            <p className="text-gray-500 mb-4">Curated especially for you</p>
            <div className="relative w-full overflow-hidden">
              <motion.div
                className="flex gap-4"
                style={{ width: `${properties.length * 260}px` }}
                animate={{ x: -scrollPosition }}
                transition={{ type: "tween", duration: 0.5 }}
              >
                {properties.map((property) => (
                  <div
                    key={property.id}
                    className="min-w-[250px] bg-white shadow-md rounded-lg overflow-hidden relative transition-transform transform hover:scale-105"
                  >
                    <Image src={property.image} alt={property.title} className="w-full h-40 object-cover" width={200} height={200} />
                    <button onClick={() => toggleLike(property.id)} className="absolute top-2 right-2 bg-white p-1 rounded-full">
                      <Heart className={`h-6 w-6 ${liked[property.id] ? "text-pink-500 fill-pink-500" : "text-gray-400"}`} />
                    </button>
                    <div className="p-3">
                      <span className="bg-gray-200 text-black px-2 py-1 text-sm rounded absolute top-2 left-2">
                        {property.price}
                      </span>
                      <h3 className="text-lg font-semibold mt-3">{property.title}</h3>
                      <p className="text-gray-600 text-sm">{property.location}</p>
                      <p className="text-gray-400 text-xs mt-1">{property.posted}</p>
                    </div>
                    <Link href="/products">
                      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
                        View All
                      </button>
                    </Link>
                  </div>

                ))}
              </motion.div>
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
                onClick={scrollLeft}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
                onClick={scrollRight}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

    </>

  );
}


// import { Bath, BedDouble, Expand, Share2, Plus, MapPin } from "lucide-react";

// interface PropertyCardProps {
//   image: string;
//   location: string;
//   price: number;
//   beds: number;
//   baths: number;
//   area: number;
//   description: string;
//   owner: {
//     name: string;
//     avatar: string;
//   };
// }

// const PropertyCard: React.FC<PropertyCardProps> = ({
//   image,
//   location,
//   price,
//   beds,
//   baths,
//   area,
//   description,
//   owner,
// }) => {
//   return (
//     <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-md">
//       <div className="relative">
//         <img src={image} alt="Property" className="w-full h-64 object-cover" />
//         <span className="absolute top-3 left-3 bg-indigo-200 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
//           <MapPin size={16} /> {location}
//         </span>
//         <span className="absolute top-3 right-3 bg-indigo-700 text-white px-3 py-1 rounded-full text-sm font-medium">
//           For Rent
//         </span>
//       </div>
//       <div className="p-5">
//         <h2 className="text-2xl font-bold text-gray-800">${price}</h2>
//         <div className="flex items-center gap-4 text-gray-600 text-sm font-medium mt-2">
//           <span className="flex items-center gap-1"><BedDouble size={18} /> {beds} Beds</span>
//           <span className="flex items-center gap-1"><Bath size={18} /> {baths} Bath</span>
//           <span className="flex items-center gap-1"><Expand size={18} /> {area} Sqft</span>
//         </div>
//         <p className="text-gray-500 text-sm mt-3">{description}</p>
//         <div className="flex justify-between items-center mt-4 border-t pt-4">
//           <div className="flex items-center gap-3">
//             <img src={owner.avatar} alt={owner.name} className="w-10 h-10 rounded-full" />
//             <span className="font-semibold text-gray-800">{owner.name}</span>
//           </div>
//           <div className="flex items-center gap-3 text-gray-600">
//             <Heart size={20} className="cursor-pointer hover:text-red-500" />
//             <Share2 size={20} className="cursor-pointer hover:text-indigo-500" />
//             <Plus size={20} className="cursor-pointer hover:text-green-500" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyCard;
