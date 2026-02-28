import { services } from "../../../lib/services";
import HeroSection from "../../../components/shared/HeroSection";
import ServiceDetails from "../../../components/shared/ServiceDetails";
import ImageSection from "../../../components/shared/ImageSection";
import CallToAction from "../../../components/shared/CallToAction";
import Footer from "../../../components/shared/Footer";
import ImageGallery from "../../../components/shared/ImageGallery";

export default function HinexInteriorPage() {
  const service = services.find((s) => s.id === 2); // Hinex Interior & Architecture

  if (!service) {
    return <div>Service not found</div>;
  }

  // Interior & Architecture images from unsplash_images.md
  const interiorImages = [
    "https://images.unsplash.com/photo-1594295828534-283d0d5f8e68?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SW50ZXJpb3IlMjAlMjYlMjBBcmNoaXRlY3R1cmV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1735448214394-ec09553a6458?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEludGVyaW9yJTIwJTI2JTIwQXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1641170098252-391151cedf84?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEludGVyaW9yJTIwJTI2JTIwQXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1623097661971-82d10493ad78?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEludGVyaW9yJTIwJTI2JTIwQXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1571273033940-89c3e9bb18b0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SW50ZXJpb3IlMjAlMjYlMjBBcmNoaXRlY3R1cmV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1653915568219-7a462467308b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SW50ZXJpb3IlMjAlMjYlMjBBcmNoaXRlY3R1cmV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1723896816059-406463dc43d3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SW50ZXJpb3IlMjAlMjYlMjBBcmNoaXRlY3R1cmV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1736910101872-5b6f1701a80d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEludGVyaW9yJTIwJTI2JTIwQXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1557810385-120d3ba946f8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEludGVyaW9yJTIwJTI2JTIwQXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1659938425098-6788938c89de?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEludGVyaW9yJTIwJTI2JTIwQXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww",
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
        images={interiorImages}
        title="Hinex Interior & Architecture"
        subtitle="Interior and architecture highlights"
        altPrefix="Interior"
      />

      {/* Call to Action */}
      <CallToAction service={service} />

      {/* Footer */}
      <Footer />
    </>
  );
}
