import { Service } from "../../app/lib/types";
import Header from "./Header";

type HeroSectionProps = {
  service: Service;
};

export default function HeroSection({ service }: HeroSectionProps) {
  // Generate appropriate text based on service title
  let description = "";
  switch(service.id) {
    case 1:
      description = "Experience luxury real estate solutions with Hinex. From dream homes to commercial buildings, we redefine luxury living.";
      break;
    case 2:
      description = "Transform your spaces with our premium interior design and architecture services. Creating beautiful, functional environments that reflect your style.";
      break;
    case 3:
      description = "Discover our collection of luxury furniture pieces that combine elegance, comfort, and exceptional craftsmanship.";
      break;
    case 4:
      description = "Premium tiles and sanitary solutions that combine functionality with elegant design to enhance your living spaces.";
      break;
    case 5:
      description = "Experience luxury fashion that blends style, comfort, and contemporary design to reflect your unique personality.";
      break;
    case 6:
      description = "Premium electronics and smart home solutions that blend innovation, functionality, and modern design for your living spaces.";
      break;
    case 7:
      description = "Comprehensive property solutions including buying, selling, and investment consultancy to make your real estate journey seamless.";
      break;
    default:
      description = "Experience luxury and excellence with our premium services tailored to your needs.";
  }

  // Create gradient text class by changing the color stops to lighter versions
  const gradientTextClass = service.color
    .replace('from-', 'from-')
    .replace('to-', 'to-')
    .replace(/-(\d{3})/g, '-300'); // Change color intensity from 500 to 300 for lightness

  return (
    <div className={`min-h-screen bg-gradient-to-br ${service.color} text-white`}>
      <div className="container mx-auto px-6 py-16">
        <Header />

        {/* Hero Content */}
        <div className="text-center max-w-5xl mx-auto">
          <h1 className={`text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r ${gradientTextClass} bg-clip-text text-transparent leading-tight`}>
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto px-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}