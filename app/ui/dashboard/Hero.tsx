import { Button } from "./button";

export function Hero() {
  return (
    <div className="bg-purple rounded-md px-20 py-6 relative overflow-hidden">
      <div className="w-72 h-72 bg-orange rounded-full flex items-center justify-center absolute -top-40 -left-52">
        <div className="w-48 h-48 bg-purple rounded-full" />
      </div>
      <div className="w-72 h-72 bg-orange rounded-full flex items-center justify-center absolute -top-52 -right-24">
        <div className="w-48 h-48 bg-purple rounded-full" />
      </div>
      <div className="my-4 mr-24">
        <p className="text-sm text-white">
          Protect your funds and ensure trust in every deal by using escrow.
          Your money stays safe until all terms are met, giving both you and
          your counterparty peace of mind. Make your first escrow payment
          today.!!
        </p>
      </div>
      <Button variant="secondary">Create Transaction</Button>
    </div>
  );
}
