import { motion } from 'framer-motion';
import { Link, useOutletContext } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, Shield, Award, Heart, Zap, Users } from 'lucide-react';
import FloatingFruits from '../components/FloatingFruits';

export default function Home() {

  // 🔴 Connect page to Layout global modal
  const { onContactClick } = useOutletContext<{ onContactClick: () => void }>();

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
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
              Fresh Brands.
            </span>
            <br />
            <span className="text-gray-900">Proven Business.</span>
          </motion.h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Juices, Burgers and Waffles — All under one trusted franchise brand.
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

      {/* WHY FRUITASTY */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">

          {[
            { icon: Heart, title: 'Fresh Daily', desc: 'Prepared in front of customers' },
            { icon: Shield, title: 'Hygienic', desc: 'Clean & safe food handling' },
            { icon: Award, title: '12+ Years', desc: 'Proven brand trust' },
            { icon: Users, title: 'High Demand', desc: 'Repeat customers everyday' },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <item.icon className="w-10 h-10 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Start Your Success Story?
        </h2>

        <p className="text-xl mb-8">
          Become a Fruitasty franchise partner today
        </p>

        <button
          onClick={onContactClick}
          className="bg-white text-green-600 px-10 py-5 rounded-full text-xl font-semibold hover:scale-105 transition"
        >
          Apply For Franchise
        </button>
      </section>

    </div>
  );
}
