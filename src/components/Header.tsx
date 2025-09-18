"use client";

import React, { useEffect, useRef, useState } from "react";

const Header = () => {
  //Defines a react component
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const panelId = "primary-navigation";

  // Focus management: move focus into panel when opened; return to button when closed
  useEffect(() => {
    if (isMenuOpen) {
      // Defer to next frame so the element exists
      const t = requestAnimationFrame(() => {
        firstLinkRef.current?.focus();
      });
      return () => cancelAnimationFrame(t);
    } else {
      buttonRef.current?.focus();
    }
  }, [isMenuOpen]);

  // Close on Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="relative flex items-center sticky top-0 z-50 border-b bg-black/95 backdrop-blur px-4 md:px-6 lg:px-8 py-2 md:py-3">
      {/* Top bar (brand + toggle) */}
      <div className="max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto px-4 flex w-full items-center justify-between">
        {/* Brand */}
        <div className="flex shrink-0 items-center">
          <span className="text-xl md:text-2xl font-bold tracking-tight text-white">
            Xekyute
          </span>
        </div>

        {/* Toggle button */}
        <button
          ref={buttonRef}
          onClick={() => setIsMenuOpen((v) => !v)}
          className="flex items-center gap-2 p-2 text-white focus:outline-none rounded-lg"
          aria-label="toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls={panelId}
        >
          <span className="text-xl md:text-2xl font-bold tracking-tight">
            Menu
          </span>
          {/* 2-bar icon */}
          <span className="relative block w-6 h-4">
            {/* top bar */}
            <span
              className={[
                "absolute left-1/2 w-6 h-0.5 bg-current -translate-x-1/2 transition-all duration-300 ease-in-out",
                isMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0",
              ].join(" ")}
            />
            {/* bottom bar */}
            <span
              className={[
                "absolute left-1/2 w-6 h-0.5 bg-current -translate-x-1/2 transition-all duration-300 ease-in-out",
                isMenuOpen
                  ? "bottom-1/2 translate-y-1/2 -rotate-45"
                  : "bottom-0",
              ].join(" ")}
            />
          </span>
        </button>
      </div>

      {/* Optional scrim (only the page area below header). Click to close. */}
      <button
        aria-hidden
        tabIndex={-1}
        onClick={() => setIsMenuOpen(false)}
        className={[
          "absolute left-0 right-0 top-full bottom-0 z-30 transition-opacity duration-300",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        ].join(" ")}
      />

      {/* Dropdown panel: sibling under the bar */}
      <div
        id={panelId}
        role="navigation"
        aria-label="Primary"
        className={[
          "absolute left-0 right-0 top-full z-40",
          "transition duration-300 ease-in-out will-change-transform",
          "bg-zinc-900/95 border border-white/10 shadow-2xl backdrop-blur",
          "origin-top",
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none",
        ].join(" ")}
      >
        <div className="max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <nav>
            <ul className="p-3">
              {[
                { href: "#", label: "Home" },
                { href: "#", label: "About" },
                { href: "#", label: "Skills" },
                { href: "#", label: "Experience" },
                { href: "#", label: "Projects" },
                { href: "#", label: "Contact" },
              ].map((item, i) => (
                <li key={item.label}>
                  <a
                    ref={i === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    className="block rounded-lg px-4 py-3 text-left text-white/90 hover:bg-brand-dark hover:text-brand-light focus:outline-none"
                    tabIndex={isMenuOpen ? 0 : -1}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; // 👈 this makes Header available to other files
