"use client";
import { useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { FlipWords } from "@/components/ui/flip-words";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { portfolio } from "@/config/portfolio";
export const navLinks = [
  ["Story", "story"],
  ["Experience", "experience"],
  ["Capabilities", "capabilities"],
  ["Infeara", "infeara"],
  ["Contact", "contact"],
];
export function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <a className="wordmark" href="#" aria-label="Vignesh, back to top">
        VIGNESH<span className="orange">.</span>
        <small>INFRASTRUCTURE / AUTOMATION / FOUNDER</small>
      </a>
      <nav
        aria-label="Main navigation"
        className={open ? "navlinks open" : "navlinks"}
      >
        {navLinks.map(([title, id]) => (
          <a key={id} href={"#" + id} onClick={() => setOpen(false)}>
            {title}
          </a>
        ))}
      </nav>
      <a className="nav-cta" href="#contact">
        LET’S BUILD SOMETHING <ArrowUpRight size={15} />
      </a>
      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
export function Identity() {
  const reduced = useReducedMotion();
  return (
    <div className="identity">
      <span className="status-dot" />
      <span className="sr-only">Technology Founder</span>
      <span aria-hidden="true">
        {reduced ? (
          "Technology Founder"
        ) : (
          <FlipWords words={portfolio.identities} duration={3500} />
        )}
      </span>
    </div>
  );
}
export function Signature() {
  const reduced = useReducedMotion();
  return (
    <div className="signature" aria-label="Vignesh">
      <span aria-hidden="true">
        {reduced ? (
          <span className="signature-static">VIGNESH</span>
        ) : (
          <TextHoverEffect text="VIGNESH" duration={0.25} />
        )}
      </span>
    </div>
  );
}
export function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.07 }}
      transition={{ duration: 0.55 }}
    >
      {children}
    </motion.div>
  );
}
export function Progress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}

export function CurrentYear() {
  return <>{new Date().getFullYear()}</>;
}
