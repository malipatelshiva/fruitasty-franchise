import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, Camera } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';
import FloatingFruits from '../components/FloatingFruits';

export default function Gallery() {

  // 🔴 Connect to Layout modal
  const { onContactClick } = useOutletContext<{ onContactClick: () => void }>();

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const galleryImages = [
    { url: 'https://i.postimg.cc/pVkJVqvB/gallery-12.jpg', title: 'Fresh Store', category: 'Products' },
    { url: 'https://i.postimg.cc/GpsXHYKt/gallery-1.jpg', title: 'Adilabad Outlet', category: 'Store' },
    { url: 'https://i.postimg.cc/mrbrrNB9/gallery-2.jpg', title: 'Nirmal Road', category: 'Store' },
    { url: 'https://i.postimg.cc/xd0ddynJ/gallery-3.jpg', title: 'Juice Counter', category: 'Products' },
    { url: 'https://i.postimg.cc/0N8NNdPJ/gallery-4.jpg', title: 'Store Interior', category: 'Store' },
    { url: 'https://i.postimg.cc/mhfLW7mc/gallery-5.jpg', title: 'Fresh Ingredients', category: 'Products' },
    { url: 'https://i.postimg.cc/vm3ZxgZj/gallery-6.jpg', title: 'Fruit Selection', category: 'Products' },
    { url: 'https://i.postimg.cc/d04VZk0F/gallery-7.jpg', title: 'Service Counter', category: 'Store' },
    { url: 'https://i.postimg.cc/Tws2Qzmj/gallery-8.jpg', title: 'Fresh Fruits', category: 'Products' },
    { url: 'https://i.postimg.cc/RCjKZ88t/gallery-9.jpg', title: 'Shakes', category: 'Products' },
    { url: 'https://i.postimg.cc/bNkbDgc9/gallery-10.jpg', title: 'Dining Area', category: 'Store' },
    { url: 'https://i.postimg.cc/bNkbDgcQ/gallery-11.jpg', title: 'Waffles', category: 'Products' },
  ];

  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <FloatingFruits />

      {/* HEADER */}
      <section className="pt-32 pb-20 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <div className="inline-block bg-gradient-to-br from-green-400 to-emerald-500 p-4 rounded-2xl mb-6">
            <Camera className="w-12 h-12 text-white" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Inside <span className="text-green-600">Fruitasty</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A visual look at our outlets, products and happy customers.
          </p>
        </div>
      </section>

      {/* IMAGE GRID */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">

          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer overflow-hidden rounded-2xl shadow-lg"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-80 object-cover"
              />
            </motion.div>
          ))}

        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6">
            <X className="w-8 h-8 text-white" />
          </button>

          <img
            src={galleryImages[selectedImage].url}
            className="max-h-[90vh] rounded-xl"
          />
        </div>
      )}

      {/* CTA */}
      <section className="py-20 bg-green-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Want to Be Part of Our Story?
        </h2>

        <p className="text-xl mb-8">
          Join our growing network of franchise partners
        </p>

        <button
          onClick={onContactClick}
          className="bg-white text-green-600 px-10 py-5 rounded-full text-xl font-semibold hover:scale-105 transition"
        >
          Get Franchise Details
        </button>
      </section>

    </div>
  );
}
