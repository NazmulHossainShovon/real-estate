import { services } from "../../../lib/services";
import HeroSection from "../../../components/shared/HeroSection";
import ServiceDetails from "../../../components/shared/ServiceDetails";
import ImageSection from "../../../components/shared/ImageSection";
import CallToAction from "../../../components/shared/CallToAction";
import Footer from "../../../components/shared/Footer";
import ImageGallery from "../../../components/shared/ImageGallery";

export default function HinexElectronicsPage() {
  const service = services.find(s => s.id === 6); // Hinex Electronics

  if (!service) {
    return <div>Service not found</div>;
  }

  // Electronics images from unsplash_images.md
  const electronicsImages = [
    "https://images.unsplash.com/photo-1550009158-9ebf69173e03?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1588508065123-287b28e013da?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1557701197-2f99da0922dd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1498049794561-7780e7231661?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1562408590-e32931084e23?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1592659762303-90081d34b277?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEVsZWN0cm9uaWNzfGVufDB8fDB8fHww"
  ];

  return (
    <>
      <HeroSection service={service} />

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

          <ServiceDetails service={service} />

          {/* Image Section */}
          <ImageSection service={service} />
        </div>
      </div>

      {/* Image Gallery */}
      <ImageGallery images={electronicsImages} />

      {/* Call to Action */}
      <CallToAction service={service} />

      {/* Footer */}
      <Footer />
    </>
  );
}