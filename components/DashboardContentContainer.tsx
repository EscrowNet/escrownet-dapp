import type React from "react";

interface Props {
  title: string;
  subTitle?: string;
  children: React.ReactNode;
  className?: string;
}

export default function DashboardContentContainer({
  title,
  subTitle,
  children,
  className,
}: Props) {
  return (
    <div
      className={`${className} bg-white dark:bg-dark-surface p-[1.6rem] rounded-md text-black dark:text-dark-text-primary border-[#C4C4C4] dark:border-dark-border border-[0.5px] transition-colors duration-300`}
    >
      <div className="w-full flex items-center justify-between mb-2">
        <p className="font-semibold text-base text-gray-900 dark:text-dark-text-primary">
          {title}
        </p>
        <p className="text-[#958f8f] dark:text-dark-text-muted text-base font-normal">
          {subTitle}
        </p>
      </div>
      <div className="w-full h-[0.5px] bg-[#C4C4C4] dark:bg-dark-border my-4" />
      {!subTitle && (
        <div className="w-full flex flex-col gap-y-5">{children}</div>
      )}
      {subTitle && children}
    </div>
  );
}
