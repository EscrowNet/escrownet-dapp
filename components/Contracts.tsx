import Image from "next/image";

interface Props {
  image: string;
  title: string;
  location: string;
  amount: number;
  client: string;
  period: string;
}

export default function Contract({
  image,
  title,
  location,
  amount,
  client,
  period,
}: Props) {
  return (
    <div className="w-full bg-[#2D05610A] dark:bg-dark-card p-3 sm:p-4 lg:p-[1.6rem] rounded-xl transition-colors duration-300">
      {/* Header section - responsive layout */}
      <div className="w-full flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-3 lg:mb-2">
        {/* Left side - Profile info */}
        <div className="flex items-center gap-x-2 sm:gap-x-3 flex-1 min-w-0">
          <Image
            src={image ?? ""}
            alt={title}
            width={400}
            height={400}
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[3.75rem] lg:h-[3.75rem] rounded-full flex-shrink-0"
          />

          <div className="min-w-0 flex-1">
            <p className="text-sm sm:text-base font-semibold mb-1 sm:mb-2 lg:mb-3 text-gray-900 dark:text-dark-text-primary truncate">
              {title}
            </p>
            <p className="text-xs sm:text-sm text-[#958F8F] dark:text-dark-text-muted font-semibold truncate">
              {location}
            </p>
          </div>
        </div>

        {/* Right side - Amount info */}
        <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 sm:gap-y-2 lg:gap-y-3 flex-shrink-0">
          <p className="text-sm sm:text-base lg:text-lg text-[#2D0561] dark:text-dark-accent font-extrabold">
            ${amount.toLocaleString()}
          </p>
          <p className="text-xs sm:text-sm text-[#958F8F] dark:text-dark-text-muted font-semibold">
            Fixed rate
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[0.5px] bg-[#C4C4C4] dark:bg-dark-border my-3 lg:my-4" />

      {/* Footer section - responsive layout */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <p className="text-xs sm:text-sm text-[#958F8F] dark:text-dark-text-muted font-semibold mb-1 sm:mb-2 lg:mb-3">
            Contract Period
          </p>
          <p className="text-xs sm:text-sm text-[#121212] dark:text-dark-text-primary font-bold">
            {period}
          </p>
        </div>
        <div className="sm:text-right">
          <p className="text-xs sm:text-sm text-[#958F8F] dark:text-dark-text-muted font-semibold mb-1 sm:mb-2 lg:mb-3">
            Name of client
          </p>
          <p className="text-xs sm:text-sm text-[#121212] dark:text-dark-text-primary font-bold truncate">
            {client}
          </p>
        </div>
      </div>
    </div>
  );
}
