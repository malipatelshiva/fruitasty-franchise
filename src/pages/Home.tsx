import { motion } from 'framer-motion';
import { Link, useOutletContext } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Award, Heart, Users, Sparkles, Utensils } from 'lucide-react';
import FloatingFruits from '../components/FloatingFruits';

export default function Home() {

  const { onContactClick } = useOutletContext<{ onContactClick: () => void }>();

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-emerald-50">

      <FloatingFruits />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              Freshness You Can Taste.
            </span>
            <br />
            <span className="text-gray-900">Health You Can Trust.</span>
          </motion.h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            At Fruitasty, we believe real health begins with real fruits.
            Every juice, smoothie and bowl is prepared fresh right in front of you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <button
              onClick={onContactClick}
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center space-x-2"
            >
              <span>Get Franchise Details</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <Link
              to="/brands"
              className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold border-2 border-green-500 hover:bg-green-50 transition-all"
            >
              Explore Brands
            </Link>

          </div>
        </div>
      </section>

      {/* ABOUT FRUITASTY */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <motion.h2 {...fadeInUp} className="text-4xl font-bold mb-6">
            Pure Freshness. No Compromise.
          </motion.h2>

          <motion.p {...fadeInUp} className="text-lg text-gray-600 max-w-3xl mx-auto">
            No artificial colors. No fake flavors. Just pure fruits, strict hygiene
            standards and carefully selected ingredients — served fresh every day.
          </motion.p>

        </div>
      </section>

      {/* WHAT WE SERVE */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-14">🌿 What We Serve</h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Fresh Fruit Juices",
              "Smoothies & Shakes",
              "Fruit Bowls",
              "Waffles",
              "Mojitos & Iced Teas",
              "Frappes"
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg flex items-center gap-4"
              >
                <Utensils className="text-green-600" />
                <span className="text-lg font-semibold">{item}</span>
              </motion.div>
            ))}

          </div>

          <p className="text-center mt-10 text-gray-600 text-lg">
            All items are 100% vegetarian, freshly prepared and quality checked.
          </p>

        </div>
      </section>

      {/* HYGIENE */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6">🧼 Hygiene First, Always</h2>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Clean kitchens, sanitized equipment, RO water, gloves & caps mandatory —
          because your health matters.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-14 max-w-6xl mx-auto px-4">
          {["RO Water", "Sanitized Equipment", "Gloves & Caps", "Daily Cleaning"].map((item, i) => (
            <div key={i} className="bg-green-50 p-6 rounded-xl">
              <Shield className="mx-auto mb-3 text-green-600" />
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY FRUITASTY */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-14">🚀 Why Fruitasty?</h2>

          <div className="grid md:grid-cols-5 gap-8 text-center">

            {[
              "Affordable healthy menu",
              "High repeat customers",
              "Fast service model",
              "Easy operations",
              "Perfect for streets, malls & hospitals"
            ].map((item, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-2xl backdrop-blur">
                <CheckCircle className="mx-auto mb-3" />
                <p>{item}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Start Your Success Story?
        </h2>

        <p className="text-xl mb-8 text-gray-600">
          Become a Fruitasty franchise partner today
        </p>

        <button
          onClick={onContactClick}
          className="bg-green-600 text-white px-10 py-5 rounded-full text-xl font-semibold hover:scale-105 transition"
        >
          Apply For Franchise
        </button>
      </section>

    </div>
  );
}
