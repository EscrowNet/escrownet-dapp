import Image from "next/image"

interface CompanyHeaderProps {
  name: string
  location: string
  logo: string
  amount: number
  milestone: string
}

export function CompanyHeader({ name, location, logo, amount, milestone }: CompanyHeaderProps) {
  return (
    <div className="flex items-start font-sans justify-between p-6">
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12">
          <Image
            src={logo || "/placeholder.svg"}
            alt={`${name} logo`}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text-primary">{name}</h3>
          <p className="text-[#958F8F] dark:text-dark-text-muted text-sm">{location}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-base font-extrabold text-purple-900 dark:text-dark-accent">${amount.toLocaleString()}</p>
        <p className="text-[#958F8F] dark:text-dark-text-muted text-sm font-semibold">{milestone}</p>
      </div>
    </div>
  )
}
