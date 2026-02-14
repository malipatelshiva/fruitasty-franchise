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
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
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
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
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
                  Our Fruitasty team will contact you shortly.
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

                  {/* NAME */}
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={(e)=>setFormData({...formData,name:e.target.value})}
                    className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-green-500"
                  />
                  {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}

                  {/* PHONE */}
                  <input
                    type="tel"
                    placeholder="Mobile Number *"
                    value={formData.phone}
                    onChange={(e)=>setFormData({...formData,phone:e.target.value})}
                    className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-green-500"
                  />
                  {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}

                  {/* CITY */}
                  <input
                    type="text"
                    placeholder="City / Location Interested *"
                    value={formData.city}
                    onChange={(e)=>setFormData({...formData,city:e.target.value})}
                    className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-green-500"
                  />
                  {errors.city && <p className="text-red-500 text-xs">{errors.city}</p>}

                  {/* BUDGET */}
                  <div>
                    <p className="font-semibold">Investment Budget *</p>
                    {["Below ₹3 Lakhs","₹3 – ₹5 Lakhs","₹5 – ₹8 Lakhs","Above ₹8 Lakhs"].map(opt=>(
                      <label key={opt} className="block text-sm mt-1">
                        <input type="radio" name="budget" value={opt}
                        onChange={(e)=>setFormData({...formData,budget:e.target.value})}/> {opt}
                      </label>
                    ))}
                    {errors.budget && <p className="text-red-500 text-xs">{errors.budget}</p>}
                  </div>

                  {/* START TIME */}
                  <div>
                    <p className="font-semibold">When do you plan to start? *</p>
                    {["Immediately","Within 1 month","Within 3 months","Just exploring"].map(opt=>(
                      <label key={opt} className="block text-sm mt-1">
                        <input type="radio" name="start"
                        onChange={(e)=>setFormData({...formData,startTime:e.target.value})}/> {opt}
                      </label>
                    ))}
                    {errors.startTime && <p className="text-red-500 text-xs">{errors.startTime}</p>}
                  </div>

                  {/* MANAGER */}
                  <div>
                    <p className="font-semibold">Who will manage the outlet? *</p>
                    {["Self","Family Member","Manager"].map(opt=>(
                      <label key={opt} className="block text-sm mt-1">
                        <input type="radio" name="manager"
                        onChange={(e)=>setFormData({...formData,manager:e.target.value})}/> {opt}
                      </label>
                    ))}
                    {errors.manager && <p className="text-red-500 text-xs">{errors.manager}</p>}
                  </div>

                  {/* SOP */}
                  <div>
                    <p className="font-semibold">Follow Fruitasty SOPs & guidelines? *</p>
                    {["Yes","No"].map(opt=>(
                      <label key={opt} className="block text-sm mt-1">
                        <input type="radio" name="sop"
                        onChange={(e)=>setFormData({...formData,sopAgreement:e.target.value})}/> {opt}
                      </label>
                    ))}
                    {errors.sopAgreement && <p className="text-red-500 text-xs">{errors.sopAgreement}</p>}
                  </div>

                  {/* CONSENT */}
                  <label className="flex items-start gap-2 text-sm">
                    <input type="checkbox"
                    onChange={(e)=>setFormData({...formData,consent:e.target.checked})}/>
                    I confirm that the above information is correct and I am genuinely interested in owning a Fruitasty franchise.
                  </label>
                  {errors.consent && <p className="text-red-500 text-xs">{errors.consent}</p>}

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg"
                  >
                    <Send size={18}/>
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
