import Image from "next/image";
// Components
import Hero from '@/components/Hero'
import Catalogue from "@/components/Catalogue";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Catalogue />
    </main>
  )
}
