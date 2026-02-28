import React from "react";

interface ImageGalleryProps {
  images: string[];
  title?: string;
  subtitle?: string;
  altPrefix?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  title,
  subtitle,
  altPrefix,
}) => {
  // Calculate images for each column
  const column1 = images.filter((_, index) => index % 4 === 0);
  const column2 = images.filter((_, index) => index % 4 === 1);
  const column3 = images.filter((_, index) => index % 4 === 2);
  const column4 = images.filter((_, index) => index % 4 === 3);

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            {title ?? "Gallery"}
          </h2>
          {subtitle ? (
            <p className="text-xl text-gray-600 mt-4">{subtitle}</p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Column 1 - 300px height */}
          <div className="space-y-6">
            {column1.map((image, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <img
                  src={image}
                  alt={`${altPrefix ?? "Image"} ${index * 4 + 1}`}
                  className="w-full object-cover rounded-xl h-[300px]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Column 2 - 400px height */}
          <div className="space-y-6">
            {column2.map((image, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <img
                  src={image}
                  alt={`${altPrefix ?? "Image"} ${index * 4 + 2}`}
                  className="w-full object-cover rounded-xl h-[400px]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Column 3 - 300px height */}
          <div className="space-y-6">
            {column3.map((image, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <img
                  src={image}
                  alt={`${altPrefix ?? "Image"} ${index * 4 + 3}`}
                  className="w-full object-cover rounded-xl h-[300px]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Column 4 - 400px height */}
          <div className="space-y-6">
            {column4.map((image, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <img
                  src={image}
                  alt={`${altPrefix ?? "Image"} ${index * 4 + 4}`}
                  className="w-full object-cover rounded-xl h-[400px]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
