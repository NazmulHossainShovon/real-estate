import { services } from "../../../lib/services";
import HeroSection from "../../../components/shared/HeroSection";
import ServiceDetails from "../../../components/shared/ServiceDetails";
import ImageSection from "../../../components/shared/ImageSection";
import CallToAction from "../../../components/shared/CallToAction";
import Footer from "../../../components/shared/Footer";
import ImageGallery from "../../../components/shared/ImageGallery";

export default function HinexTilesPage() {
  const service = services.find((s) => s.id === 4); // Hinex Tiles & Sanitary

  if (!service) {
    return <div>Service not found</div>;
  }

  // Tiles & sanitary images from unsplash_images.md
  const tilesImages = [
    "https://images.unsplash.com/photo-1679216617293-6bfd7f797e19?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VGlsZXMlMjAlMjYlMjBTYW5pdGFyeXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1561701862-7800e5363ce1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFRpbGVzJTIwJTI2JTIwU2FuaXRhcnl8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1746737198839-1a9bfea007cc?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFRpbGVzJTIwJTI2JTIwU2FuaXRhcnl8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1593817122715-bbe051a66bf8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFRpbGVzJTIwJTI2JTIwU2FuaXRhcnl8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1630840450974-7c7ddad8bdfe?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGlsZXMlMjAlMjYlMjBTYW5pdGFyeXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1744828367881-97196efa6ec2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VGlsZXMlMjAlMjYlMjBTYW5pdGFyeXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1572513170782-acf6e30e3ff8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VGlsZXMlMjAlMjYlMjBTYW5pdGFyeXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1667923869411-f998f790ce98?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VGlsZXMlMjAlMjYlMjBTYW5pdGFyeXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1722650270197-3f0369d77206?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFRpbGVzJTIwJTI2JTIwU2FuaXRhcnl8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&crop=faces&fit=crop&h=32",
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
        images={tilesImages}
        title="Hinex Tiles & Sanitary"
        subtitle="Tiles and sanitary selections"
        altPrefix="Tiles"
      />

      {/* Call to Action */}
      <CallToAction service={service} />

      {/* Footer */}
      <Footer />
    </>
  );
}
