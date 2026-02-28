import { services } from "../../../lib/services";
import HeroSection from "../../../components/shared/HeroSection";
import ServiceDetails from "../../../components/shared/ServiceDetails";
import ImageSection from "../../../components/shared/ImageSection";
import CallToAction from "../../../components/shared/CallToAction";
import Footer from "../../../components/shared/Footer";
import ImageGallery from "../../../components/shared/ImageGallery";

export default function HinexFashionPage() {
  const service = services.find((s) => s.id === 5); // Hinex Fashion

  if (!service) {
    return <div>Service not found</div>;
  }

  // Fashion images from unsplash_images.md
  const fashionImages = [
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1571513800374-df1bbe650e56?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEZhc2hpb258ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEZhc2hpb258ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEZhc2hpb258ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1603189343302-e603f7add05a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1601762603339-fd61e28b698a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEZhc2hpb258ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEZhc2hpb258ZW58MHx8MHx8fDA%3D",
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
        images={fashionImages}
        title="Hinex Fashion"
        subtitle="Discover our curated fashion collection"
        altPrefix="Fashion"
      />

      {/* Call to Action */}
      <CallToAction service={service} />

      {/* Footer */}
      <Footer />
    </>
  );
}
