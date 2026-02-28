import { services } from "../../../lib/services";
import HeroSection from "../../../components/shared/HeroSection";
import ServiceDetails from "../../../components/shared/ServiceDetails";
import ImageSection from "../../../components/shared/ImageSection";
import CallToAction from "../../../components/shared/CallToAction";
import Footer from "../../../components/shared/Footer";
import ImageGallery from "../../../components/shared/ImageGallery";

export default function HinexRealEstatePage() {
  const service = services.find((s) => s.id === 1); // Hinex Real Estate

  if (!service) {
    return <div>Service not found</div>;
  }

  // Real estate images from unsplash_images.md
  const realEstateImages = [
    "https://images.unsplash.com/photo-1592595896551-12b371d546d5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFJlYWwlMjBFc3RhdGV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1448630360428-65456885c650?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFJlYWwlMjBFc3RhdGV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFJlYWwlMjBFc3RhdGV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1582407947304-fd86f028f716?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmVhbCUyMEVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UmVhbCUyMEVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1605146769289-440113cc3d00?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UmVhbCUyMEVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UmVhbCUyMEVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UmVhbCUyMEVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1565402170291-8491f14678db?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFJlYWwlMjBFc3RhdGV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFJlYWwlMjBFc3RhdGV8ZW58MHx8MHx8fDA%3D",
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
        images={realEstateImages}
        title="Hinex Real Estate"
        subtitle="Real estate highlights"
        altPrefix="RealEstate"
      />

      {/* Call to Action */}
      <CallToAction service={service} />

      {/* Footer */}
      <Footer />
    </>
  );
}
