import Image from "next/image";
import { Header } from "@/app/ui/landing/Header";
import { Button } from "@/app/ui/landing/button";
import { TextInput } from "@/app/ui/landing/textinput";
import { AmountInput } from "@/app/ui/landing/AmountInput";
import { Select } from "@/app/ui/landing/select";
import { Footer } from "@/app/ui/landing/Footer";

import Image1 from "@/public/icons/image1.svg";
import USDT from "@/public/icons/usdt.svg";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex flex-col items-center pt-20 bg-gray-light h-full gap-6 px-24">
        <Image
          src="/images/bg-home.png"
          alt="bg"
          fill
          className="object-contain mt-10"
        />
        <h1
          className="text-4xl font-bold text-center text-midnight"
          style={{ maxWidth: 580 }}
        >
          Secure Crypto Transactions Made Simple
        </h1>
        <p className="text-center text-purple text-sm">
          Integrate Escrow Directly Into Your dApps with Our StarkNet SDK
        </p>
        <div className="flex items-center justify-center gap-4 z-10">
          <Button variant="secondary" className="w-40">
            Download SDK
          </Button>
          <Button className="w-40">Launch App</Button>
        </div>
        <div
          className="flex flex-col items-center justify-center gap-4 bg-white rounded-xl mt-4 p-4 z-10"
          style={{ width: 400 }}
        >
          <div className="flex items-end justify-between w-full">
            <div className="w-full">
              <p className="text-sm font-semibold">Deposit details</p>
            </div>
            <Select
              options={[{ id: 1, name: "0x1e1...39b2", icon: Image1 }]}
              defaultValue={{ id: 1, name: "0x1e1...39b2", icon: Image1 }}
              className="h-8 w-64"
            />
          </div>
          <div className="w-full flex items-center justify-between gap-2">
            <TextInput placeholder="Starknet Address or Stack-ID" />
            <Select
              options={[
                { id: 1, name: "USDT", icon: USDT },
                { id: 2, name: "USDC", icon: USDT },
              ]}
              defaultValue={{ id: 1, name: "USDT", icon: USDT }}
              className="w-40"
            />
          </div>
          <AmountInput />
          <button className="flex w-full h-10 mt-4 items-center justify-center rounded-md bg-purple hover:opacity-90 px-3 text-sm font-medium text-white transition-colors aria-disabled:cursor-not-allowed aria-disabled:opacity-50">
            Escrow Pay
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
