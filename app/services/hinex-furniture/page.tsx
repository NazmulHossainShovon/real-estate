import { services } from "../../../lib/services";
import HeroSection from "../../../components/shared/HeroSection";
import ServiceDetails from "../../../components/shared/ServiceDetails";
import ImageSection from "../../../components/shared/ImageSection";
import CallToAction from "../../../components/shared/CallToAction";
import Footer from "../../../components/shared/Footer";
import ImageGallery from "../../../components/shared/ImageGallery";

export default function HinexFurniturePage() {
  const service = services.find((s) => s.id === 3); // Hinex Luxury Furniture

  if (!service) {
    return <div>Service not found</div>;
  }

  // Luxury furniture images from unsplash_images.md
  const furnitureImages = [
    "https://images.unsplash.com/photo-1540759772348-12e90305e8f4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8THV4dXJ5JTIwRnVybml0dXJlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8THV4dXJ5JTIwRnVybml0dXJlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1616952391192-d8bc85de60d9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEx1eHVyeSUyMEZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1622020886177-239ee6e69b39?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEx1eHVyeSUyMEZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1680503146476-abb8c752e1f4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEx1eHVyeSUyMEZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1540932239986-30128078f3c5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8THV4dXJ5JTIwRnVybml0dXJlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1564078516393-cf04bd966897?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8THV4dXJ5JTIwRnVybml0dXJlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8THV4dXJ5JTIwRnVybml0dXJlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1540932239986-30128078f3c5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEx1eHVyeSUyMEZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1680503146476-abb8c752e1f4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEx1eHVyeSUyMEZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
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
            <p className="text-xl text-gray-600">Our specialized offerings</p>
          </div>

          <ServiceDetails service={service} />

          {/* Image Section */}
          <ImageSection service={service} />
        </div>
      </div>

      {/* Image Gallery */}
      <ImageGallery
        images={furnitureImages}
        title="Hinex Luxury Furniture"
        subtitle="Explore our luxury furniture pieces"
        altPrefix="Furniture"
      />

      {/* Call to Action */}
      <CallToAction service={service} />

      {/* Footer */}
      <Footer />
    </>
  );
}
