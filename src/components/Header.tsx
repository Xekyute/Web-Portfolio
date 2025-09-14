"use client";

import React, { useState } from "react";

const Header = () => {
  // defines a React component.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center">
      {/* This is the name section of the header's title */}
      <div className="flex shrink-0 items-center">
        <span className="text-2xl font-bold tracking-tight">Xekyute</span>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)} //onClick={() => setIsMenuOpen((v) => !v)}
        className="ml-auto flex items-center gap-2 p-2 text-white focus:outline-none"
        aria-label="toggle menu"
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
      >
        {/* label */}
        <span className="text-sm font-medium">Menu</span>

        {/* 2-bar icon */}
        <span className="relative block w-6 h-4">
          {/* top bar */}
          <span
            className={[
              "absolute left-1/2 w-6 h-0.5 bg-current -translate-x-1/2 transition-all duration-300 ease-in-out",
              isMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0",
            ].join(" ")}
          />
          {/* Bottom bar */}
          <span
            className={[
              "absolute left-1/2 w-6 h-0.5 bg-current -translate-x-1/2 transition-all duration-300 ease-in-out",
              isMenuOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0",
            ].join(" ")}
          />
        </span>
      </button>

      {/* Conditional Menu / Overlay container (always rendered so we can animate) */}
      <div
        className={`fixed inset-0 z-50 transition-[visibility] ${
          isMenuOpen ? "visible" : "invisible"
        }`}
        aria-hidden={!isMenuOpen}
      >
        {/* scrim */}
        <button
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
          aria-label="close menu"
        />

        {/* Panel */}
        <nav
          id="primary-navigation"
          className={`relative mx-auto mt-16 w-[min(92vw,40rem)] rounded-xl border border-white/10 bg-zinc-900/95 backdrop-blur shadow-2xl transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-3"
          }`}
        >
          <ul className="p-3">
            {[
              { href: "#", label: "Home" },
              { href: "#", label: "About" },
              { href: "#", label: "Skills" },
              { href: "#", label: "Experience" },
              { href: "#", label: "Projects" },
              { href: "#", label: "Contact" },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block rounded-lg px-4 py-3 text-left text-white/90 hover:bg-emerald-500/15 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header; // 👈 this makes Header available to other files
