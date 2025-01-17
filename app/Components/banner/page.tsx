import Image from "next/image";
import EllipseLeft from "@/public/Ellipse 2.svg";
import EllipseRight from "@/public/Ellipse 3.svg";
export default function Banner() {
    return (
        <div className="flex relative bg-[#64537B] text-white h-auto">
        {/* <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
          <div className="w-1/2 h-full bg-pink-400 rounded-full blur-3xl opacity-20"></div>
          <div className="w-1/2 h-full bg-pink-400 rounded-full blur-3xl opacity-20 rotate-180"></div>
        </div> */}
        <div>
            <Image
              src={EllipseLeft}
              alt="Escrow Banner"
              width={85}
              height={55}
            />
        </div>
        <div className="relative z-10 max-w-4xl h-auto mx-auto py-6 text-left">
          <p className="mt-4">
            Protect your funds and ensure trust in every deal by using escrow.Your money stays safe until all terms are met, giving <br />
            both you and your counterparty peace of mind. Make your first escrow payment today!
          </p>
          <button className="mt-6 px-6 py-2 bg-[#FAA197] text-white font-medium rounded hover:bg-pink-600 transition">
            Create Transaction
          </button>
        </div>
        <div>
            <Image
              src={EllipseRight}
              alt="Escrow Banner"
              width={155}
              height={85}
            />
        </div>
      </div>
    );
  }
  