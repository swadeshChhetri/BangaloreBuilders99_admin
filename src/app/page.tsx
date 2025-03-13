"use client";
// import { div } from "@/components/ui/div";
// import { div } from "@/components/ui/div";
// import { div, divContent } from "@/components/ui/div";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
// import { div } from "@/components/ui/div";
import { useState } from "react";
import { Star } from "lucide-react";
// import { Circulardivbar, buildStyles } from "react-circular-divbar";
import 'react-circular-progressbar/dist/styles.css';
// import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell } from "recharts";
import Image from "next/image";
// import { Progress } from "@/components/ui/progress";
import { Users, Bath } from "lucide-react";
import UserSidebar from "@/components/Sidebar";

const Dashboard = () => {
  const [visibleReviews, setVisibleReviews] = useState(2);
  const userData = [
    { month: "Jan", users: 100 },
    { month: "Feb", users: 200 },
    { month: "Mar", users: 400 },
    { month: "Apr", users: 600 },
  ];

  const data = [
    { month: "April", sale: 800000, rent: 200000 },
    { month: "May", sale: 600000, rent: 300000 },
    { month: "June", sale: 400000, rent: 250000 },
    { month: "July", sale: 500000, rent: 350000 },
    { month: "August", sale: 450000, rent: 300000 },
  ];

  const reviews = [
    {
      name: "John Doe",
      time: "5m ago",
      rating: 4,
      review: "Friendly service Josh, Lunar and everyone at Just Property in Hastings deserved a big Thank You for moving us from Jakarta to Medan during the lockdown.",
    },
    {
      name: "Amelia Tuner",
      time: "10h ago",
      rating: 4,
      review: "I viewed a number of properties with Just Property and found them to be professional, efficient, patient, courteous and helpful every time.",
    },
  ];

  const stats = [
    {
      title: "Properties for Sale",
      value: 2356,
      target: "3k/month",
      percentage: 71,
      color: "#334ac0", // Blue color
    },
    {
      title: "Properties for Rent",
      value: 2206,
      target: "3k/month",
      percentage: 90,
      color: "#22c55e", // Green color
    },
  ];

  const pieData = [
    { name: "Agent", value: 38, color: "#fbbf24" }, // Orange
    { name: "Customers", value: 62, color: "#a855f7" }, // Purple
  ];

  const productStats = [
    { label: "Product Viewed", value: 561, unit: "/days", div: 80 },
    { label: "Product Listed", value: 3456, unit: "Unit", div: 90 },
  ];

  const recentProperty = {
    image: "/recent-property.jpg", // Replace with actual image URL
    title: "98AB Alexander Court, London",
    address: "45 Connor St. London, 44523",
    beds: 4,
    baths: 2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  };

  const countries_data = [
    { region: "Europe", units: 653 },
    { region: "Asia", units: 653 },
    { region: "Africa", units: 653 },
    { region: "Australia", units: 653 },
    { region: "America", units: 653 },
    { region: "USA", units: 653 },
  ];

  return (
    <div>
      <div className="flex ">
        <UserSidebar />
        <div className="ml-72 p-4 shadow-md rounded-lg w-[75%]">
        <div className="p-6">
          {/* Header */}
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>

          {/* Stats divs */}
          <div className="grid grid-cols-4 gap-4 mt-4">
            <div className="p-4 bg-white shadow-md">
              <h2 className="text-lg font-bold">Total Properties</h2>
              <p className="text-2xl">1,250</p>
            </div>
            <div className="p-4 bg-white shadow-md">
              <h2 className="text-lg font-bold">Registered Users</h2>
              <p className="text-2xl">5,000</p>
            </div>
            <div className="p-4 bg-white shadow-md">
              <h2 className="text-lg font-bold">Pending Approvals</h2>
              <p className="text-2xl">20</p>
            </div>
            <div className="p-4 bg-white shadow-md">
              <h2 className="text-lg font-bold">Total Revenue</h2>
              <p className="text-2xl">$12,000</p>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-white p-4 shadow-md">
              <h2 className="text-lg font-bold mb-2">User Growth</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={userData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Line type="monotone" dataKey="users" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="mt-6 bg-white p-4 shadow-md">
            <h2 className="text-lg font-bold mb-2">Recent Activities</h2>
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 border">User</th>
                  <th className="p-2 border">Activity</th>
                  <th className="p-2 border">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">John Doe</td>
                  <td className="p-2 border">Listed a new property</td>
                  <td className="p-2 border">March 5, 2025</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Quick Actions */}
          <div className="mt-6 flex gap-4">
            <div className="bg-blue-500 text-white">Add New Property</div>
            <div className="bg-green-500 text-white">Manage Users</div>
            <div className="bg-orange-500 text-white">View Reports</div>
          </div>
        </div>
        <div className="p-6 space-y-6 bg-gray-100 min-h-screen grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Overview Chart */}
          <div className="lg:col-span-2 p-6">
            <h2 className="text-lg font-bold">Overview</h2>
            <div className="flex justify-between mt-4">
              <div className="flex items-center gap-2">
                <div className="bg-blue-500 p-2 rounded-lg text-white">🏠</div>
                <div>
                  <p className="text-gray-500">Total Sale</p>
                  <p className="text-lg font-bold">2,346 Unit</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-green-500 p-2 rounded-lg text-white">🏢</div>
                <div>
                  <p className="text-gray-500">Total Rent</p>
                  <p className="text-lg font-bold">1,252 Unit</p>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sale" stroke="#3b82f6" fill="#93c5fd" strokeWidth={3} />
                <Line type="monotone" dataKey="rent" stroke="#22c55e" fill="#bbf7d0" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Customer Reviews */}
          <div className="p-6">
            <h2 className="text-lg font-bold">Customer Review</h2>
            {reviews.slice(0, visibleReviews).map((review, index) => (
              <div key={index} className="border-b pb-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-300 rounded-full" />
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-gray-500 text-sm">{review.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className={i < review.rating ? "text-yellow-500" : "text-gray-300"} />
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-2">{review.review}</p>
              </div>
            ))}
            {visibleReviews < reviews.length && (
              <div className="w-full mt-4" onClick={() => setVisibleReviews(reviews.length)}>
                See More Reviews
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="flex justify-between items-center p-6">
              <div>
                <p className="text-2xl font-bold">{stat.value.toLocaleString()}</p>
                <p className="text-gray-500">{stat.title}</p>
                <p className="text-sm text-gray-400">Target {stat.target}</p>
              </div>
              <div className="w-16 h-16">
                {/* <Circulardivbar
                value={stat.percentage}
                text={`${stat.percentage}%`}
                styles={buildStyles({
                  pathColor: stat.color,
                  textColor: stat.color,
                  trailColor: "#eee",
                  textSize: "20px",
                })} */}
                {/* /> */}
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pie Chart */}
          <div className="p-6">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  dataKey="value"
                  label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-2 text-sm">
              {pieData.map((data, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: data.color }}
                  />
                  {data.name}
                </div>
              ))}
            </div>
          </div>

          {/* Product Stats */}
          <div className="p-6 flex flex-col justify-between">
            {productStats.map((stat, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between text-sm">
                  <span>{stat.label}</span>
                  <span>{stat.value} {stat.unit}</span>
                </div>
                <div className="h-2 mt-1" />
              </div>
            ))}
          </div>

          {/* Recent Property */}
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-3">Recent Property</h3>
            <Image
              src={recentProperty.image}
              alt={recentProperty.title}
              width={400}
              height={200}
              className="rounded-lg w-full h-40 object-cover"
            />
            <h4 className="font-bold mt-3">{recentProperty.title}</h4>
            <p className="text-gray-500 text-sm">{recentProperty.address}</p>
            <div className="flex gap-4 my-2">
              <div className="flex items-center gap-1 text-gray-600">
                <Users size={16} />
                {recentProperty.beds}
              </div>
              <div className="flex items-center gap-1 text-gray-600">
                <Bath size={16} />
                {recentProperty.baths}
              </div>
            </div>
            <p className="text-sm text-gray-500">{recentProperty.description}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row gap-6">
          {/* Left Side - Properties List */}
          <div className="w-full md:w-1/2">
            <h2 className="text-lg font-semibold mb-4">Properties Map Location</h2>
            <div className="space-y-4">
              {countries_data.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm font-medium">
                    <span>{item.region}</span>
                    <span className="text-gray-500">{item.units} Unit</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded overflow-hidden mt-1">
                    <div
                      className="h-full bg-blue-600"
                      style={{ width: `${(item.units / 700) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Placeholder for Map */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="w-full h-64 bg-gray-100 flex items-center justify-center rounded-lg">
              <span className="text-gray-500">Map Placeholder</span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
};

export default Dashboard;
