import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  brand: "fruitasty" | "burgerz" | "waffles" | null;
}

export default function MenuModal({ isOpen, onClose, brand }: MenuModalProps) {

  const menus = {
    fruitasty: {
      title: "Fruitasty Menu",
      items: [
        "Fresh Fruit Juices",
        "Fresh Fruit Smoothies",
        "cold pressed juices",
        "Fresh Fruit Bowls",
        "OatMeal Bowls",
        "MilkShakes & ThickShakes",
        "Waffles",
        "ICE Teas & Lemonades",
        "Frappe's",
        "Sandwiches & Wraps",
        "Dry Fruit Shake",
        "Burgers & Fries",
        "Pizzas",
        
    
        "Mojito (Mint / Blue / Lemon)",
        "Mocktails (Virgin Mojito / Sunrise / Sunset / Blue Lagoon)",

        
      ],
    },

    burgerz: {
      title: "Burgerz Menu",
      items: [
        "Sandwich & Wraps",
        " Burgers & Fries",
        "pizzas",
        "Mojito (Mint / Blue / Lemon)",
        "Shakes & Frappe's",
        "Mocktails (Virgin Mojito / Sunrise / Sunset / Blue Lagoon)",
      ],
    },

    waffles: {
      title: "Yum Yum Waffles Menu",
      items: [
        "Waffles",
        "pancakes",
        "Frappe's",
        "Shakes",
        
      ],
    },
  };

  const currentMenu = brand ? menus[brand] : null;

  return (
    <AnimatePresence>
      {isOpen && currentMenu && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">

          {/* overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={onClose}
          />

          {/* modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 50 }}
            className="relative bg-white rounded-3xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-8"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4"
            >
              <X className="w-7 h-7" />
            </button>

            <h2 className="text-3xl font-bold text-center mb-8 text-green-600">
              {currentMenu.title}
            </h2>

            <div className="space-y-4">
              {currentMenu.items.map((item, index) => (
                <div
                  key={index}
                  className="border rounded-xl p-4 hover:bg-green-50 transition font-medium"
                >
                  {item}
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
