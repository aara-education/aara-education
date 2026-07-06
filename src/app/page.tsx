import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Compass from "@/components/compass/Compass";
import Stats from "@/components/Stats";
import WhyChooseAara from "@/components/WhyChooseAara";
import Courses from "@/components/Courses";
import PartnerColleges from "@/components/PartnerColleges";
import Testimonials from "@/components/Testimonials";
import AdmissionProcess from "@/components/AdmissionProcess";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
  <Navbar />
  <Hero />
  <Compass />
  <Stats />
  <WhyChooseAara />
  <Courses />
  <PartnerColleges />
  <Testimonials />
  <AdmissionProcess />
  <FAQ />
  <ContactCTA />
  <Footer />
</>
  );
}