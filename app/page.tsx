// export default function Home() {
//   return (
//     <main className="min-h-screen">
//       <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
//         <h1 className="font-title text-5xl uppercase text-ardalos-dark mb-4">
//           ARDALOS
//         </h1>
//         <p className="text-ardalos-gray text-xl mb-8 italic">
//           &quot;Le changement par l&apos;action&quot;
//         </p>
//         <button className="bg-ardalos-green hover:bg-ardalos-leaf text-white font-bold py-3 px-8 rounded-md transition-colors">
//           Découvrir nos actions
//         </button>
//       </section>
//     </main>
//   );
// }

import AboutSection from "@/components/AboutSection";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import LatestNews from "@/components/LatestNews";


export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <AboutSection />
      <LatestNews />
    </main>
  );
}