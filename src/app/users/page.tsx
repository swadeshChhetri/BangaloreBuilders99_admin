import { MoreVertical } from "lucide-react";
import UserSidebar from "@/components/Sidebar";

interface Customer {
  id: string;
  name: string;
  joinDate: string;
  location: string;
  phone: string;
  email: string;
  avatar: string;
}

const customers: Customer[] = [
  {
    id: "#B85651",
    name: "Marry Parkin",
    joinDate: "02/06/2021, 12:42 AM",
    location: "KL35 BodyClub Paris Center",
    phone: "+41 1234 5678",
    email: "info@example.com",
    avatar: "/images/marry.jpg",
  },
  {
    id: "#DF5236",
    name: "Kamlin Roy",
    joinDate: "01/01/2022, 12:42 AM",
    location: "TL35 Grand Hotel France",
    phone: "+71 1234 5678",
    email: "info@example.com",
    avatar: "/images/kamlin.jpg",
  },
  {
    id: "#PL562H",
    name: "Rony Kally",
    joinDate: "03/08/2022, 12:42 AM",
    location: "TY35 Avenue GGLondon Center",
    phone: "+91 1234 5678",
    email: "info@example.com",
    avatar: "/images/rony.jpg",
  },
];

export default function CustomerList() {
  return (
    <div className="flex">
      <UserSidebar />
      <div className="pt-18 ml-72 p-4 shadow-md rounded-lg w-[75%]">
        <div className="bg-white p-6 rounded-xl shadow-md space-y-6">
          {customers.map((customer) => (
            <div key={customer.id} className="bg-gray-50 p-4 rounded-lg shadow flex flex-col md:flex-row items-center md:items-start md:justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={customer.avatar}
                  alt={customer.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm text-blue-600">{customer.id}</p>
                  <h3 className="text-lg font-semibold">{customer.name}</h3>
                  <p className="text-sm text-gray-500">Join on {customer.joinDate}</p>
                  <button className="mt-2 px-3 py-1 border rounded-lg text-blue-600 border-blue-600 hover:bg-blue-50 text-sm">
                    Show Order History ▼
                  </button>
                </div>
              </div>
              <div className="flex-1 flex flex-col md:flex-row gap-4 md:items-center">
                <div>
                  <p className="text-gray-500 text-sm">Location</p>
                  <p className="font-semibold">{customer.location}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Phone Number</p>
                  <p className="font-semibold">{customer.phone}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Email Address</p>
                  <p className="font-semibold">{customer.email}</p>
                </div>
              </div>
              <button className="text-gray-500 cursor-pointer">
                <MoreVertical />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
