import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactModal({ isOpen, onClose }) {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full name required";

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Invalid number";
    }

    if (!formData.city.trim()) newErrors.city = "City required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ FINAL EMAILJS SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_8appqe7",        // ✅ your service id
        "template_t2v8rno",       // ✅ your template id
        {
          name: formData.name,
          phone: formData.phone,
          city: formData.city,
          time: new Date().toLocaleString(),
        },
        "9ITs0pGat0pu-CZqP"       // ✅ your public key
      );

      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setFormData({
          name: "",
          phone: "",
          city: "",
        });
      }, 2000);

    } catch (err) {
      console.error("EMAIL ERROR:", err);
      alert("Failed to send enquiry");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">

          <motion.div
            className="absolute inset-0 bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="relative bg-white w-full max-w-md rounded-2xl p-6 shadow-xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          >

            {isSuccess ? (
              <div className="text-center py-10">
                <CheckCircle className="w-14 h-14 text-green-500 mx-auto" />
                <h2 className="mt-3 text-xl font-bold">
                  Enquiry Submitted ✅
                </h2>
                <p className="text-gray-600">
                  Our team will contact you soon
                </p>
              </div>
            ) : (
              <>
                {/* ✅ UPDATED TITLE */}
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-bold">
                    Farmfresh Juice Franchise Enquiry
                  </h2>
                  <button onClick={onClose}>
                    <X />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">

                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border p-3 rounded-lg"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />

                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="w-full border p-3 rounded-lg"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />

                  <input
                    type="text"
                    placeholder="City"
                    className="w-full border p-3 rounded-lg"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-600 text-white py-3 rounded-lg flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    {isSubmitting ? "Sending..." : "Submit Enquiry"}
                  </button>

                </form>
              </>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
