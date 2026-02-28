import { services } from "../../../lib/services";
import HeroSection from "../../../components/shared/HeroSection";
import ServiceDetails from "../../../components/shared/ServiceDetails";
import ImageSection from "../../../components/shared/ImageSection";
import CallToAction from "../../../components/shared/CallToAction";
import Footer from "../../../components/shared/Footer";
import ImageGallery from "../../../components/shared/ImageGallery";

export default function HinexPropertyPage() {
  const service = services.find((s) => s.id === 7); // Hinex Property Business

  if (!service) {
    return <div>Service not found</div>;
  }

  // Property business images from unsplash_images.md
  const propertyImages = [
    "https://images.unsplash.com/photo-1763479169474-728a7de108c3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UHJvcGVydHklMjBCdXNpbmVzc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1719474814907-7fb947f865aa?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UHJvcGVydHklMjBCdXNpbmVzc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1719474818087-f334f1e92985?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFByb3BlcnR5JTIwQnVzaW5lc3N8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1738395711591-c045c8731787?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFByb3BlcnR5JTIwQnVzaW5lc3N8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1609436132311-e4b0c9370469?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFByb3BlcnR5JTIwQnVzaW5lc3N8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1763478958776-ebd04b6459ee?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UHJvcGVydHklMjBCdXNpbmVzc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1547565933-13a49bfa933d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UHJvcGVydHklMjBCdXNpbmVzc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1719474815671-08411b0ea840?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UHJvcGVydHklMjBCdXNpbmVzc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1627161683077-e34782c24d81?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFByb3BlcnR5JTIwQnVzaW5lc3N8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1738395711577-27ebce81998f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFByb3BlcnR5JTIwQnVzaW5lc3N8ZW58MHx8MHx8fDA%3D",
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
        images={propertyImages}
        title="Hinex Property Business"
        subtitle="Property business highlights"
        altPrefix="Property"
      />

      {/* Call to Action */}
      <CallToAction service={service} />

      {/* Footer */}
      <Footer />
    </>
  );
}
