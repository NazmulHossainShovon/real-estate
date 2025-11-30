import { ChevronRight } from "lucide-react";
import { Service } from "../../app/lib/types";

type ServiceDetailsProps = {
  service: Service;
};

export default function ServiceDetails({ service }: ServiceDetailsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {service.items.map((item, index) => (
        <div 
          key={index} 
          className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
        >
          <div className={`w-12 h-12 rounded-full ${service.color} bg-gradient-to-r mb-4 flex items-center justify-center`}>
            <ChevronRight className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{item}</h3>
          <p className="text-gray-600">
            Premium {item.toLowerCase()} solutions tailored to your needs.
          </p>
        </div>
      ))}
    </div>
  );
}