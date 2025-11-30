import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { services } from "../../../lib/services";

export default function HinexFurniturePage() {
  const service = services.find(s => s.id === 3); // Hinex Luxury Furniture
  
  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <>
      {/* Hero Section with service-specific theme */}
      <div className={`min-h-screen bg-gradient-to-br ${service.color.replace('to-', 'to-')} text-white`}>
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
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-amber-300 to-red-300 bg-clip-text text-transparent leading-tight">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto px-4">
              Discover our collection of luxury furniture pieces that combine elegance, 
              comfort, and exceptional craftsmanship.
            </p>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="bg-gray-50 py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Premium Services
            </h2>
            <p className="text-xl text-gray-600">
              Our specialized offerings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {service.items.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className={`w-12 h-12 rounded-full ${service.color.replace('to-', 'to-')} bg-gradient-to-r mb-4 flex items-center justify-center`}>
                  <ChevronRight className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item}</h3>
                <p className="text-gray-600">
                  Premium {item.toLowerCase()} solutions tailored to your needs.
                </p>
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="aspect-video relative">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">{service.title} Excellence</h3>
              <p className="text-white/90 max-w-2xl">
                Our luxury furniture collection combines exceptional design with superior 
                craftsmanship to create pieces that enhance any living space.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className={`py-16 ${service.color.replace('to-', 'to-')} bg-gradient-to-r`}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Upgrade Your Home?
          </h2>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Contact our experts today for a personalized consultation.
          </p>
          <button className="px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-white/90 transition">
            Contact Us
          </button>
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