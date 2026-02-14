import { motion } from 'framer-motion';
import { Heart, Shield, Award, Users, Sparkles, Target, TrendingUp, Coffee } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';
import FloatingFruits from '../components/FloatingFruits';

export default function About() {

  // 🔴 THIS LINE CONNECTS PAGE TO LAYOUT MODAL
  const { onContactClick } = useOutletContext<{ onContactClick: () => void }>();

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <FloatingFruits />

      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-block bg-gradient-to-br from-green-400 to-emerald-500 p-4 rounded-2xl mb-6"
            >
              <Heart className="w-12 h-12 text-white" />
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              The <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Fruitasty</span> Vision
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Fruitasty is more than just a juice bar — we are a health-focused lifestyle brand dedicated to transforming how people experience fresh, nutritious refreshments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h2>

              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Founded in 2013, Fruitasty began with a simple yet powerful mission: to bring fresh, healthy, and delicious beverages to every corner of India.
                </p>
                <p>
                  Over the past 12+ years, we've grown from a single outlet to a thriving franchise network, serving thousands of customers daily with our commitment to quality and freshness.
                </p>
                <p>
                  Our expansion into Burgerz and Yum Yum Waffles demonstrates our dedication to providing diverse, high-quality food options while maintaining our core values of freshness and hygiene.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-green-400 to-emerald-500 p-8 rounded-3xl text-white"
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Target className="w-8 h-8" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                    <p className="opacity-90">
                      To provide fresh, healthy, and affordable food options while creating successful business opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Sparkles className="w-8 h-8" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                    <p className="opacity-90">
                      To become India's most trusted and loved health food brand.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Join Our <span className="text-green-600">Success Story</span>
        </h2>

        <p className="text-xl text-gray-600 mb-8">
          Become a part of India's fastest-growing health food franchise network
        </p>

        <button
          onClick={onContactClick}
          className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-10 py-5 rounded-full text-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all"
        >
          Get Franchise Details
        </button>
      </section>

    </div>
  );
}
