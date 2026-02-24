import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  TrendingUp,
  Clock,
  DollarSign,
  Users,
  Briefcase,
  Award,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import FloatingFruits from '../components/FloatingFruits';

/* ---------------- COUNTER ANIMATION ---------------- */
function Counter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return <span ref={ref}>{count}</span>;
}

/* ---------------- PAGE ---------------- */

export default function Franchise() {

  // connect with layout modal
  const { onContactClick } = useOutletContext<{ onContactClick: () => void }>();

  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-emerald-50">

      <FloatingFruits />

      {/* HEADER */}
      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-block bg-gradient-to-br from-green-400 to-emerald-500 p-4 rounded-2xl mb-6">
              <Briefcase className="w-12 h-12 text-white" />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              <span className="text-green-600">Franchise</span> Opportunity
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join India's fast-growing health food franchise with a proven and profitable business model.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INVESTMENT CARDS */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-6 text-center">

          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl">
            <DollarSign className="w-10 h-10 mx-auto mb-4" />
            <h3 className="text-3xl font-bold">₹3.5L</h3>
            <p>Total Investment</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl">
            <Clock className="w-10 h-10 mx-auto mb-4" />
            <h3 className="text-3xl font-bold">10–14</h3>
            <p>Months Payback</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl">
            <TrendingUp className="w-10 h-10 mx-auto mb-4" />
            <h3 className="text-3xl font-bold">25–35%</h3>
            <p>Profit Margin</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl">
            <Users className="w-10 h-10 mx-auto mb-4" />
            <h3 className="text-3xl font-bold">₹45K–₹90K</h3>
            <p>Monthly Returns</p>
          </div>

        </div>
      </section>

      {/* FOFO MODEL */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-4">FOFO Business Model</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Franchise Owned Franchise Operated — you own and run your outlet while we support you at every step.
        </p>
      </section>

      {/* OWN A FRUITASTY OUTLET */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              Own a <span className="text-green-600">Fruitasty Outlet</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fruitasty offers one of the most practical and affordable franchise opportunities in the fresh food segment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-16">

            {/* WHY PARTNER */}
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award className="text-green-600" /> Why Partner With Us?
              </h3>

              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-center gap-3"><CheckCircle className="text-green-500" /> Low investment model</li>
                <li className="flex items-center gap-3"><CheckCircle className="text-green-500" /> High-demand daily consumption products</li>
                <li className="flex items-center gap-3"><CheckCircle className="text-green-500" /> Simple operations</li>
                <li className="flex items-center gap-3"><CheckCircle className="text-green-500" /> Strong brand trust</li>
                <li className="flex items-center gap-3"><CheckCircle className="text-green-500" /> Scalable across locations</li>
              </ul>
            </div>

            {/* WHAT WE PROVIDE */}
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Sparkles className="text-green-600" /> What We Provide
              </h3>

              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-center gap-3"><CheckCircle className="text-green-500" /> Brand rights & complete setup guidance</li>
                <li className="flex items-center gap-3"><CheckCircle className="text-green-500" /> Menu & recipe training</li>
                <li className="flex items-center gap-3"><CheckCircle className="text-green-500" /> Equipment & layout support</li>
                <li className="flex items-center gap-3"><CheckCircle className="text-green-500" /> Marketing & launch support</li>
                <li className="flex items-center gap-3"><CheckCircle className="text-green-500" /> Lifetime operational assistance</li>
              </ul>
            </div>

          </div>

          {/* IDEAL LOCATIONS */}
          <div className="bg-white p-10 rounded-3xl shadow-xl text-center">
            <h3 className="text-3xl font-bold mb-6">Ideal Locations</h3>

            <div className="grid md:grid-cols-5 gap-6 text-lg text-gray-700">
              <div className="p-4 bg-green-50 rounded-xl">High streets</div>
              <div className="p-4 bg-green-50 rounded-xl">Hospitals & clinics</div>
              <div className="p-4 bg-green-50 rounded-xl">Educational institutions</div>
              <div className="p-4 bg-green-50 rounded-xl">Malls & food courts</div>
              <div className="p-4 bg-green-50 rounded-xl">Residential areas</div>
            </div>

            <p className="mt-8 text-xl text-gray-600">
              Grow with a brand that values long-term partnerships, not short-term profits.
            </p>

            <button
              onClick={onContactClick}
              className="mt-8 bg-green-600 text-white px-10 py-4 rounded-full text-xl font-semibold hover:scale-105 transition"
            >
              Apply for Franchise
            </button>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Start Your Business?
        </h2>

        <p className="text-xl mb-8">
          Get complete franchise details and investment information
        </p>

        <button
          onClick={onContactClick}
          className="bg-white text-green-600 px-10 py-5 rounded-full text-xl font-semibold hover:scale-105 transition"
        >
          Get Franchise Details Now
        </button>
      </section>

    </div>
  );
}
