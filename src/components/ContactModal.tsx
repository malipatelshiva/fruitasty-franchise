import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {

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

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // ✅ VALIDATION
  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.phone.trim()) newErrors.phone = "Mobile number required";
    else if (!/^[6-9]\d{9}$/.test(formData.phone))
      newErrors.phone = "Enter valid Indian mobile number";

    if (!formData.city.trim()) newErrors.city = "City required";
    if (!formData.budget) newErrors.budget = "Select budget";
    if (!formData.startTime) newErrors.startTime = "Select timeline";
    if (!formData.manager) newErrors.manager = "Select manager";
    if (!formData.sopAgreement) newErrors.sopAgreement = "Select yes/no";
    if (!formData.consent) newErrors.consent = "Accept consent";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ SUBMIT
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_8appqe7",      // ✅ your service id
        "template_t2v8rno",     // ✅ your template id
        {
          name: formData.name,
          phone: formData.phone,
          city: formData.city,
          budget: formData.budget,
          start_time: formData.startTime,
          manager: formData.manager,
          sop: formData.sopAgreement,
          consent: formData.consent ? "Accepted" : "No",
          time: new Date().toLocaleString(),
        },
        "9ITs0pGat0pu-CZqP"     // ✅ your public key
      );

      setIsSuccess(true);

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
      console.error("EMAIL ERROR:", error);
      alert("Failed to send enquiry. Check EmailJS setup.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">

          {/* BACKDROP */}
          <motion.div
            className="absolute inset-0 bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* MODAL */}
          <motion.div
            className="relative bg-white w-full max-w-lg rounded-2xl p-6 shadow-xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          >

            {isSuccess ? (
              <div className="text-center py-10">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                <h3 className="text-2xl font-bold mt-3">
                  Enquiry Submitted ✅
                </h3>
                <p className="text-gray-600">
                  We will contact you soon
                </p>
              </div>
            ) : (
              <>
                <div className="flex justify-between mb-4">
                  <h2 className="font-bold text-lg">
                    Fruitasty Franchise Enquiry
                  </h2>
                  <button onClick={onClose}>
                    <X />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">

                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border p-3 rounded"
                    value={formData.name}
                    onChange={(e)=>setFormData({...formData,name:e.target.value})}
                  />

                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="w-full border p-3 rounded"
                    value={formData.phone}
                    onChange={(e)=>setFormData({...formData,phone:e.target.value})}
                  />

                  <input
                    type="text"
                    placeholder="City"
                    className="w-full border p-3 rounded"
                    value={formData.city}
                    onChange={(e)=>setFormData({...formData,city:e.target.value})}
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-600 text-white py-3 rounded flex justify-center gap-2"
                  >
                    <Send size={18}/>
                    {isSubmitting ? "Sending..." : "Submit"}
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
