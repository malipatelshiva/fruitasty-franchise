import { motion } from "framer-motion";

export default function FloatingFruits() {
  const fruits = [
    { emoji: "🍊", size: 70, x: "10%", delay: 0 },
    { emoji: "🍓", size: 60, x: "80%", delay: 1 },
    { emoji: "🥝", size: 65, x: "70%", delay: 2 },
    { emoji: "🍋", size: 55, x: "20%", delay: 1.5 },
    { emoji: "🍉", size: 80, x: "90%", delay: 0.5 },
    { emoji: "🫐", size: 55, x: "15%", delay: 2.5 },
    { emoji: "🥭", size: 75, x: "85%", delay: 1.8 },
    { emoji: "🍌", size: 65, x: "50%", delay: 0.8 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {fruits.map((fruit, index) => (
        <motion.div
          key={index}
          className="absolute flex items-center justify-center"
          style={{
            left: fruit.x,
            fontSize: `${fruit.size}px`,
          }}
          initial={{ y: "110vh", rotate: 0 }}
          animate={{
            y: "-110vh",
            rotate: 360,
          }}
          transition={{
            duration: 18 + index * 2,
            repeat: Infinity,
            delay: fruit.delay,
            ease: "linear",
          }}
        >
          {/* Glow background */}
          <div className="absolute w-24 h-24 rounded-full bg-green-300/30 blur-2xl"></div>

          {/* Fruit */}
          <span
            style={{
              filter: "drop-shadow(0px 8px 18px rgba(0,0,0,0.25))",
            }}
            className="relative"
          >
            {fruit.emoji}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
