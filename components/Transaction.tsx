import Image from "next/image";

interface Props {
  image: string;
  from: string;
  date: string;
  amount: number;
  recieved: boolean;
}

export default function Transaction({
  image,
  from,
  date,
  amount,
  recieved,
}: Props) {
  return (
    <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4 p-2 sm:p-0 rounded-lg sm:rounded-none bg-gray-50/50 sm:bg-transparent dark:bg-dark-card/30 sm:dark:bg-transparent">
      {/* Left side - Profile and info */}
      <div className="flex items-center gap-x-2 sm:gap-x-3 flex-1 min-w-0">
        <Image
          src={image ?? ""}
          alt={from}
          width={400}
          height={400}
          className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[2.5rem] lg:h-[2.5rem] rounded-full flex-shrink-0"
        />

        <div className="min-w-0 flex-1">
          <p className="text-sm sm:text-base font-semibold mb-1 sm:mb-2 lg:mb-3 text-gray-900 dark:text-dark-text-primary truncate">
            {recieved ? "From" : "To"} {from}
          </p>
          <p className="text-xs sm:text-sm text-[#958F8F] dark:text-dark-text-muted font-semibold">
            {date}
          </p>
        </div>
      </div>

      {/* Right side - Amount info */}
      <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 sm:gap-y-1 lg:gap-y-2 flex-shrink-0 sm:text-right">
        <p className="text-sm sm:text-base lg:text-lg text-[#2D0561] dark:text-dark-accent font-extrabold">
          {recieved ? "+" : "-"}${amount.toLocaleString()}
        </p>
        <p className="text-xs sm:text-sm text-[#958F8F] dark:text-dark-text-muted font-semibold">
          {recieved ? "Amount Received" : "Amount Transferred"}
        </p>
      </div>
    </div>
  );
}
