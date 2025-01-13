import { TextInput } from "./textinput";

export const AmountInput = () => {
  return (
    <div className="relative w-full">
      <TextInput placeholder="Amount" />
      <button className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-dark bg-white rounded-md py-1 px-2">
        Max
      </button>
    </div>
  );
};
