import React, { useEffect, useState } from "react";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position and window height
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      // Determine when to show the footer
      if (scrollPosition + windowHeight >= documentHeight) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer
      className={`bg-gray-900 text-white py-4 ${
        showFooter ? "block" : "hidden"
      }`}
    >
      <div className="container mx-auto">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} VDC Telecom</p>
          <p>Contact: contact@vdctelecom.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
