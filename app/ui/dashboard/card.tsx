export function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white w-full rounded-md p-4 flex flex-col gap-4">
      <div className="text-md text-black font-semibold border-b border-b-gray-medium pb-4">
        <p>{title}</p>
      </div>
      {children}
    </div>
  );
}
