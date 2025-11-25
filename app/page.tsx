"use client";

import {
  ChevronRight,
  Home,
  Building2,
  Palette,
  Sofa,
  ShowerHead,
  Shirt,
  Tv,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Hinex Real Estate",
    icon: <Home className="w-8 h-8" />,
    color: "from-orange-500 to-pink-500",
    items: ["Residential Towers", "Commercial Buildings", "Land Development"],
  },
  {
    id: 2,
    title: "Hinex Interior & Architecture",
    icon: <Palette className="w-8 h-8" />,
    color: "from-purple-500 to-indigo-500",
    items: [
      "Luxury Home Interior",
      "Corporate Office Interior",
      "Modular Kitchen",
    ],
  },
  {
    id: 3,
    title: "Hinex Luxury Furniture",
    icon: <Sofa className="w-8 h-8" />,
    color: "from-amber-500 to-red-500",
    items: [
      "Premium Sofas",
      "Exclusive Bedroom Sets",
      "Modern Office Furniture",
    ],
  },
  {
    id: 4,
    title: "Hinex Tiles & Sanitary",
    icon: <ShowerHead className="w-8 h-8" />,
    color: "from-teal-500 to-cyan-500",
    items: ["European Tiles", "Premium Sanitary Ware"],
  },
  {
    id: 5,
    title: "Hinex Fashion",
    icon: <Shirt className="w-8 h-8" />,
    color: "from-rose-500 to-pink-600",
    items: ["Modern Luxury Wear", "Global Trend Collection"],
  },
  {
    id: 6,
    title: "Hinex Electronics",
    icon: <Tv className="w-8 h-8" />,
    color: "from-blue-500 to-purple-600",
    items: ["Smart Home Appliances", "LED, AC, Home Gadgets"],
  },
  {
    id: 7,
    title: "Hinex Property Business",
    icon: <Building2 className="w-8 h-8" />,
    color: "from-emerald-500 to-teal-600",
    items: ["Buy, Sell & Investment Consultancy"],
  },
];

export default function HinexLandingPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-orange-900 text-white">
        <div className="container mx-auto px-6 py-16">
          {/* Navbar */}
          <nav className="flex justify-between items-center mb-20">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              HINEX
            </div>
            <button className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition">
              Explore Divisions
            </button>
          </nav>

          {/* Hero Content */}
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              Live the Luxury
              <br />
              Experience HINEX
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              One brand. Seven worlds of excellence. From dream homes to high
              fashion, we redefine luxury living across every dimension.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-gray-50 py-20 -mt-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Our World of Luxury
            </h2>
            <p className="text-xl text-gray-600">
              Discover excellence in every category
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl"
              >
                {/* Gradient Top Bar */}
                <div className={`h-2 bg-gradient-to-r ${service.color}`} />

                <div className="p-8">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 text-white mb-6 group-hover:scale-110 transition`}
                  >
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>

                  <ul className="space-y-3 mb-8">
                    {service.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-700"
                      >
                        <ChevronRight className="w-5 h-5 text-orange-500 mr-2" />
                        <span className="text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r ${service.color} hover:shadow-lg transform hover:translate-y-1 transition-all duration-300 flex items-center justify-center gap-2`}
                  >
                    Explore
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition duration-500`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent mb-4">
            HINEX
          </div>
          <p className="text-gray-400 text-lg">
            Crafting Luxury Across Every Dimension © 2025
          </p>
        </div>
      </footer>
    </>
  );
}
