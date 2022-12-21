import { Section } from "../components/Section";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

import CookieConsent from "../components/banners/CookieConsent";

export default function Page({ children, className, showPromoMessage }) {
  return (
    // <div className="grid gap-4 grid-rows-[200px_minmax(900px,_1fr)_100px]">
    // <div className="grid grid-rows-[auto_1fr_auto]">
    // <div className="h-screen grid grid-rows-[auto_minmax(320px,_1fr)_auto]">
    // <div className={`h-screen grid grid-rows-[auto_min-content_auto] ${className}`}>
    // <div className="h-screen grid grid-rows-[auto_minmax(320px,_1fr)_auto]">
    <div className={`min-h-screen grid grid-rows-[auto_1fr_auto] ${className}`}>
      <Navbar message={showPromoMessage} />
      <main className="flex min-w-full items-center mx-auto">
        <Section>{children}</Section>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
