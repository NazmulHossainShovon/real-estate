import Image from "next/image";
import { Service } from "../../app/lib/types";

type ImageSectionProps = {
  service: Service;
};

export default function ImageSection({ service }: ImageSectionProps) {
  // Generate appropriate description based on service title
  let description = "";
  switch(service.id) {
    case 1:
      description = "With years of experience in the luxury real estate market, we deliver premium solutions that exceed expectations.";
      break;
    case 2:
      description = "With years of experience in luxury interior design, we transform spaces into beautiful, functional environments that reflect your unique style.";
      break;
    case 3:
      description = "Our luxury furniture collection combines exceptional design with superior craftsmanship to create pieces that enhance any living space.";
      break;
    case 4:
      description = "Our premium tiles and sanitary ware combine superior quality with elegant designs to create beautiful, functional spaces.";
      break;
    case 5:
      description = "Our luxury fashion collections blend contemporary design with premium materials to create pieces that reflect your unique style.";
      break;
    case 6:
      description = "Our premium electronics and smart home solutions combine cutting-edge technology with exceptional quality to enhance your living experience.";
      break;
    case 7:
      description = "Our property business consultancy combines years of market expertise with personalized service to guide you through every step of your property journey.";
      break;
    default:
      description = "We offer professional services with attention to detail and exceptional quality.";
  }

  return (
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
          {description}
        </p>
      </div>
    </div>
  );
}