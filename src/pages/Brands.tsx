import { motion } from "framer-motion";
import { Apple } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import FloatingFruits from "../components/FloatingFruits";
import MenuModal from "../components/MenuModal";

export default function Brands() {

  // connect global franchise modal (Layout)
  const { onContactClick } = useOutletContext<{ onContactClick: () => void }>();

  // MENU MODAL STATE
  const [menuBrand, setMenuBrand] = useState<"fruitasty" | "burgerz" | "waffles" | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const brands = [
    {
      name: "Fruitasty",
      icon: "🍹",
      tagline: "Fresh & Healthy Refreshments",
      description:
        "Our flagship brand offering fresh juices, smoothies, shakes, and fruit bowls made from premium quality fruits.",
      gradient: "from-green-400 to-emerald-500",
      key: "fruitasty",
    },
    {
      name: "Burgerz",
      icon: "🍔",
      tagline: "Juicy Burgers for Every Craving",
      description:
        "Affordable, delicious burgers crafted for youth and families with simple operations and high demand.",
      gradient: "from-orange-400 to-red-500",
      key: "burgerz",
    },
    {
      name: "Yum Yum Waffles",
      icon: "🧇",
      tagline: "Belgian Waffles with Premium Toppings",
      description:
        "Authentic Belgian waffles served with premium toppings and strong visual appeal for customers.",
      gradient: "from-amber-400 to-yellow-500",
      key: "waffles",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <FloatingFruits />

      {/* HEADER */}
      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-block bg-gradient-to-br from-green-400 to-emerald-500 p-4 rounded-2xl mb-6">
              <Apple className="w-12 h-12 text-white" />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Our <span className="text-green-600">Brands</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three powerful brands under one successful franchise model.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BRAND CARDS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">

          {brands.map((brand, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.04 }}
              className="bg-white p-8 rounded-3xl shadow-xl border"
            >
              <div className="text-6xl mb-4">{brand.icon}</div>

              <h2 className="text-3xl font-bold mb-2">{brand.name}</h2>

              <p className={`font-semibold mb-3 bg-gradient-to-r ${brand.gradient} bg-clip-text text-transparent`}>
                {brand.tagline}
              </p>

              <p className="text-gray-600 mb-6">{brand.description}</p>

              {/* VIEW MENU BUTTON */}
              <button
                onClick={() => setMenuBrand(brand.key as "fruitasty" | "burgerz" | "waffles")}
                className={`w-full bg-gradient-to-r ${brand.gradient} text-white py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition`}
              >
                View Menu
              </button>

              {/* FRANCHISE BUTTON */}
              <button
                onClick={onContactClick}
                className="w-full mt-3 border border-green-600 text-green-600 py-3 rounded-full font-semibold hover:bg-green-50 transition"
              >
                Get Franchise
              </button>
            </motion.div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gray-50">
        <h2 className="text-4xl font-bold mb-6">
          Want to Own <span className="text-green-600">All Three Brands?</span>
        </h2>

        <p className="text-lg text-gray-600 mb-8">
          Get complete franchise details and start your journey with Fruitasty
        </p>

        <button
          onClick={onContactClick}
          className="bg-green-600 text-white px-10 py-4 rounded-full text-xl font-semibold hover:scale-105 transition"
        >
          Get Franchise Details
        </button>
      </section>

      {/* MENU MODAL (VERY IMPORTANT) */}
      <MenuModal
        isOpen={menuBrand !== null}
        brand={menuBrand}
        onClose={() => setMenuBrand(null)}
      />

    </div>
  );
}
