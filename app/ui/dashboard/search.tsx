export function Search({ placeholder }: { placeholder: string }) {
  return (
    <input
      className="w-96 h-10 border text-black bg-transparent border-purple rounded-md text-sm px-3 placeholder:text-gray-dark focus:outline-none"
      placeholder={placeholder}
    />
  );
}
