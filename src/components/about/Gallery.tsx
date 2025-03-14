import { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  // This would typically come from your data file or CMS
  const images = [
    {
      src: "/images/AliMazurui.jpg", 
      alt: "An event at SwahiliPot Hub",
      caption: "Event led by Our Chief Mentor 001" 
    },
    {
      src: "/images/Amp.jpg",
      alt: "Art exhibition at SwahiliPot Hub",
      caption: "Pwani Innovation Week at Swahilipot Hub"
    },
    {
      src: "/images/attach.jpeg", 
      alt: "kina Chris na Bruno",
      caption: "Techies and Volunteers from Swahilipot during an event at Technical University of Mombasa."
    },
    {
      src: "/images/Mekatilili.jpg", 
      alt: "Community meetup",
      caption: "Community gathering at Swahilipot Hub"
    },
    {
      src: "/images/mwanakupona.jpg", 
      alt: "Hackathon event",
      caption: "Info session at Jitume Lab with techies"
    },
    {
      src: "/images/slide2.jpg", 
      alt: "Youth performance",
      caption: "Cultural performance by local youth"
    }
  ];

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'next' | 'prev') => {
    if (selectedImage === null) return;

    if (direction === 'next') {
      setSelectedImage((selectedImage + 1) % images.length);
    } else {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <section className="py-16 bg-blue-50 dark:bg-gray-800">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Gallery</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            A glimpse into our activities, events, and community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => openLightbox(index)}
            >
              <div className="h-64 relative">
                <Image 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                  layout="fill" // Ensures that Image component covers the area fully
                />
              </div>
              <div className="p-4 bg-orange-50 dark:bg-gray-800">
                <p className="text-gray-700 dark:text-gray-300">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <button 
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeLightbox}
              aria-label="Close Lightbox"
            >
              &times;
            </button>
            <button 
              className="absolute left-4 text-white text-4xl"
              onClick={() => navigateImage('prev')}
              aria-label="Previous Image"
            >
              &#8249;
            </button>
            <div className="max-w-4xl max-h-[80vh]">
              <Image 
                src={images[selectedImage].src} 
                alt={images[selectedImage].alt} 
                className="max-w-full max-h-[80vh] object-contain"
                layout="intrinsic" // Maintains aspect ratio
                width={800} // Optional: Set a width to maintain aspect ratio
                height={600} // Optional: Set a height to maintain aspect ratio
              />
              <p className="text-white text-center mt-4">{images[selectedImage].caption}</p>
            </div>
            <button 
              className="absolute right-4 text-white text-4xl"
              onClick={() => navigateImage('next')}
              aria-label="Next Image"
            >
              &#8250;
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
