import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
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
