import Image from "next/image";
import Usdt from "../../../public/usdt.png";

export default function Transactions({ title }: { title: string }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="font-bold text-lg mb-4">{title}</h2>
      <ul className="space-y-2">
        {Array(7)
          .fill(0)
          .map((_, idx) => (
            <li
              key={idx}
              className="flex justify-between items-center p-2 border-b border-gray-200"
            >
              <span>Design Milestone 1</span>
              <div className="flex items-center gap-2">
                <span className="text-green-600 font-medium">USDT</span>
                <Image
                  src={Usdt}
                  alt=""
                  width={20} 
                  height={20}
                />
                <span className="font-bold">$200</span>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
