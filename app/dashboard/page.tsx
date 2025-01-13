import { Header } from "@/app/ui/dashboard/header";
import { Hero } from "@/app/ui/dashboard/Hero";

export default async function Page() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-8 p-4 pr-8">
        <Hero />
      </main>
    </>
  );
}
