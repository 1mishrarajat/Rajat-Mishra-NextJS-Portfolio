
import { notFound } from "next/navigation";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const pages = {
  services: Services,
  projects: Projects,
  experience: Experience,
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const PageSection = pages[slug as keyof typeof pages];

  if (!PageSection) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[76px]">
        <PageSection />
      </main>
      <Footer />
    </>
  );
}
