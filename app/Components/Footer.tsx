import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2D0561]  text-white py-8 px-6 h-32">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="mb-4 md:mb-0">
          <span className="font-semibold">@escrownet</span>
        </div>

        <div className="text-right">
          <p className="mb-1 md:mb-0">Beta Version</p>
          <p>For © winter Hackathon 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
