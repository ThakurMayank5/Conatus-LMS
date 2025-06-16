import { Copyright } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className="flex my-4">
      <div className="flex flex-row items-center space-x-2 text-gray-500 text-sm">
        <Copyright />
        <span>Ecudum training 2024</span>
      </div>
      <div className="flex flex-row space-x-4 ml-auto">
        <button className="font-bold text-md text-black/70">
          Get in touch
        </button>
        <button className="font-bold text-md text-black/70">Instagram</button>
        <button className="font-bold text-md text-black/70">
          Privacy Policy
        </button>
      </div>
    </footer>
  );
}

export default Footer;
