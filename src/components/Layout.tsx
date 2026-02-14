import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactModal from "./ContactModal";

export default function Layout() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on every page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  // open modal (used by navbar + pages + footer)
  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  // close modal
  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col relative">

      {/* NAVBAR */}
      <Navbar onContactClick={openContactModal} />

      {/* PAGE CONTENT */}
      {/* z-10 makes content above floating fruits */}
      <main className="flex-grow relative z-10">
        <Outlet context={{ onContactClick: openContactModal }} />
      </main>

      {/* FOOTER */}
      <Footer onContactClick={openContactModal} />

      {/* GLOBAL FRANCHISE CONTACT MODAL */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
      />
    </div>
  );
}
