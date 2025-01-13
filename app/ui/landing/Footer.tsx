import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-midnight h-24 flex justify-between px-24 py-4">
      <div className="flex items-start gap-4">
        <Logo variant="white" />
      </div>
      <div className="flex flex-col items-end text-white text-xs gap-2">
        <p>Beta Version</p>
        <p>For @ winter Hackathon 2024</p>
      </div>
    </footer>
  );
}
