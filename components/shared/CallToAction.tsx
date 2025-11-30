import { Service } from "../../app/lib/types";

type CallToActionProps = {
  service: Service;
};

export default function CallToAction({ service }: CallToActionProps) {
  let heading = "";
  let subheading = "";
  
  switch(service.id) {
    case 1:
      heading = "Ready to Start Your Project?";
      subheading = "Contact our experts today for a personalized consultation.";
      break;
    case 2:
      heading = "Ready to Transform Your Space?";
      subheading = "Contact our experts today for a personalized consultation.";
      break;
    case 3:
      heading = "Ready to Upgrade Your Home?";
      subheading = "Contact our experts today for a personalized consultation.";
      break;
    case 4:
      heading = "Ready to Transform Your Space?";
      subheading = "Contact our experts today for a personalized consultation.";
      break;
    case 5:
      heading = "Ready to Redefine Your Style?";
      subheading = "Contact our experts today for a personalized consultation.";
      break;
    case 6:
      heading = "Ready to Upgrade Your Home Tech?";
      subheading = "Contact our experts today for a personalized consultation.";
      break;
    case 7:
      heading = "Ready to Begin Your Property Journey?";
      subheading = "Contact our experts today for a personalized consultation.";
      break;
    default:
      heading = "Learn More About Our Services";
      subheading = "Contact our experts today for a personalized consultation.";
  }

  return (
    <div className={`py-16 ${service.color} bg-gradient-to-r`}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {heading}
        </h2>
        <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
          {subheading}
        </p>
        <button className="px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-white/90 transition">
          Contact Us
        </button>
      </div>
    </div>
  );
}