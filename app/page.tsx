import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { services } from "../lib/services";
import Link from "next/link";

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
      <div className="bg-gray-50 py-20 relative">
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

                <div className="p-6">
                  <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6 group-hover:scale-105 transition">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  <div className="px-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>

                    <ul className="space-y-3 mb-6">
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

                    <Link
                      href={
                        service.id === 1
                          ? "/services/hinex-realestate"
                          : service.id === 2
                            ? "/services/hinex-interior"
                            : service.id === 3
                              ? "/services/hinex-furniture"
                              : service.id === 4
                                ? "/services/hinex-tiles"
                                : service.id === 5
                                  ? "/services/hinex-fashion"
                                  : service.id === 6
                                    ? "/services/hinex-electronics"
                                    : service.id === 7
                                      ? "/services/hinex-property"
                                      : "#"
                      }
                      className={`w-full cursor-pointer py-4 rounded-xl font-semibold text-white bg-gradient-to-r ${service.color} hover:shadow-lg transform hover:translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 relative z-10`}
                    >
                      Explore
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition duration-500 -z-10`}
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
