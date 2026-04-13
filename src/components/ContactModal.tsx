import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {

  // ================= FORM STATE =================
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    budget: "",
    startTime: "",
    manager: "",
    sopAgreement: "",
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Prevent body scroll when modal open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isOpen]);

  // ================= VALIDATION =================
  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim())
      newErrors.name = "Full name is required";

    if (!formData.phone.trim()) {
      newErrors.phone = "Mobile number required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid Indian mobile number";
    }

    if (!formData.city.trim())
      newErrors.city = "City required";

    if (!formData.budget)
      newErrors.budget = "Select investment budget";

    if (!formData.startTime)
      newErrors.startTime = "Select start plan";

    if (!formData.manager)
      newErrors.manager = "Select management option";

    if (!formData.sopAgreement)
      newErrors.sopAgreement = "Please choose yes or no";

    if (!formData.consent)
      newErrors.consent = "You must accept consent";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ================= SUBMIT =================
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_8appqe7",        // ✅ your Service ID
        "template_t2v8rno",       // ✅ your Template ID
        {
          name: formData.name,
          phone: formData.phone,
          city: formData.city,
          budget: formData.budget,
          start_time: formData.startTime,
          manager: formData.manager,
          sop: formData.sopAgreement,
          consent: formData.consent ? "Accepted" : "No",
        },
        "9ITs0pGat0pu-CZqP"       // ✅ your Public Key
      );

      setIsSuccess(true);

      // reset after success
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setFormData({
          name: "",
          phone: "",
          city: "",
          budget: "",
          startTime: "",
          manager: "",
          sopAgreement: "",
          consent: false,
        });
      }, 2500);

    } catch (error) {
      console.error("EMAILJS ERROR:", error);
      alert("Failed to send enquiry. Please check EmailJS setup.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ================= UI =================
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">

          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* MODAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
          >

            {isSuccess ? (
              <div className="p-10 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                <h3 className="text-2xl font-bold mt-4">Enquiry Submitted!</h3>
                <p className="text-gray-600 mt-2">
                  Our Farmfresh Juice team will contact you shortly.
                </p>
              </div>
            ) : (
              <>
                {/* HEADER */}
                <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
                  <h2 className="text-xl font-bold">Fruitasty Franchise Enquiry</h2>
                  <button onClick={onClose} className="p-1">
                    <X />
                  </button>
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">

                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={(e)=>setFormData({...formData,name:e.target.value})}
                    className="w-full border p-3 rounded-lg"
                  />

                  <input
                    type="tel"
                    placeholder="Mobile Number *"
                    value={formData.phone}
                    onChange={(e)=>setFormData({...formData,phone:e.target.value})}
                    className="w-full border p-3 rounded-lg"
                  />

                  <input
                    type="text"
                    placeholder="City *"
                    value={formData.city}
                    onChange={(e)=>setFormData({...formData,city:e.target.value})}
                    className="w-full border p-3 rounded-lg"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-600 text-white py-3 rounded-lg"
                  >
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
