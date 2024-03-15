import Image from "next/image";
import HomeCompIndex from "@/app/components/home/ui";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HomeCompIndex />
    </main>
  );
}
