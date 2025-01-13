import { Sidebar } from "../ui/dashboard/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-60 bg-white">
        <Sidebar />
      </div>
      <div className="flex-grow md:overflow-y-auto bg-gray-light">
        {children}
      </div>
    </div>
  );
}
