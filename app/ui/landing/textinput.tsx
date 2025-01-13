type TextInputProps = {
  placeholder?: string;
  className?: string;
};

export function TextInput({ placeholder = "", className }: TextInputProps) {
  return (
    <input
      type="text"
      className={`w-full h-10 bg-gray-light rounded-md focus:outline-none px-3 text-xs text-black placeholder:text-gray-dark ${
        className || ""
      }`}
      placeholder={placeholder}
    />
  );
}
