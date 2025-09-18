"use client";

import React, { useEffect, useRef, useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasFinePointer, setHasFinePointer] = useState(false);

  const headerRef = useRef<HTMLElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const closeTimerRef = useRef<number | null>(null);

  const panelId = "primary-navigation";

  // Detect mouse/trackpad vs touch
  useEffect(() => {
    const mql = window.matchMedia("(pointer: fine)");
    const update = () => setHasFinePointer(mql.matches);
    update();
    try {
      mql.addEventListener("change", update);
      return () => mql.removeEventListener("change", update);
    } catch {
      // Safari fallback
      mql.addListener(update);
      return () => mql.removeListener(update);
    }
  }, []);

  // Focus management
  useEffect(() => {
    if (isMenuOpen) {
      const t = requestAnimationFrame(() => firstLinkRef.current?.focus());
      return () => cancelAnimationFrame(t);
    } else {
      buttonRef.current?.focus();
    }
  }, [isMenuOpen]);

  // Close on Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) =>
      e.key === "Escape" && setIsMenuOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // ---- pointer-leave-downward logic (with 4px threshold) ----
  const clearCloseTimer = () => {
    if (closeTimerRef.current != null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const handlePointerEnter = () => clearCloseTimer();

  const handlePointerLeave = (e: React.PointerEvent) => {
    if (!hasFinePointer) return;
    const headerBottom = headerRef.current?.getBoundingClientRect().bottom ?? 0;
    const y = e.clientY;
    if (y > headerBottom + 4) {
      // 👈 tiny buffer
      clearCloseTimer();
      closeTimerRef.current = window.setTimeout(
        () => setIsMenuOpen(false),
        140
      );
    }
  };
  // -----------------------------------------------------------

  // ---- focus trap inside panel while open -------------------
  const onPanelKeyDown = (e: React.KeyboardEvent) => {
    if (!isMenuOpen || e.key !== "Tab") return;

    const panel = panelRef.current;
    if (!panel) return;

    const focusables = Array.from(
      panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    ).filter(
      (el) => !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden")
    );

    if (focusables.length === 0) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = document.activeElement as HTMLElement | null;

    if (!e.shiftKey && active === last) {
      e.preventDefault();
      first.focus();
    } else if (e.shiftKey && active === first) {
      e.preventDefault();
      last.focus();
    }
  };
  // -----------------------------------------------------------

  return (
    <header
      ref={headerRef}
      className="relative flex items-center sticky top-0 z-50 border-b bg-black/95 backdrop-blur px-4 md:px-6 lg:px-8 py-2 md:py-3"
      onPointerEnter={hasFinePointer ? handlePointerEnter : undefined}
      onPointerLeave={hasFinePointer ? handlePointerLeave : undefined}
    >
      {/* Top bar (brand + toggle) */}
      <div className="max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto px-4 flex w-full items-center justify-between">
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
          aria-label={isMenuOpen ? "Close menu" : "Open menu"} // 👈 dynamic label
          aria-expanded={isMenuOpen}
          aria-controls={panelId}
        >
          <span className="text-xl md:text-2xl font-bold tracking-tight">
            Menu
          </span>
          <span className="relative block w-6 h-4">
            <span
              className={[
                "absolute left-1/2 w-6 h-0.5 bg-current -translate-x-1/2 transition-all duration-300 ease-in-out",
                isMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0",
              ].join(" ")}
            />
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

      {/* Scrim only for touch devices (no hover) */}
      {!hasFinePointer && (
        <button
          aria-hidden
          tabIndex={-1}
          onClick={() => setIsMenuOpen(false)}
          className={[
            "absolute left-0 right-0 top-full bottom-0 z-30 transition-opacity duration-300",
            isMenuOpen ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />
      )}

      {/* Dropdown panel (outer div has no role; inner <nav> provides semantics) */}
      <div
        ref={panelRef}
        id={panelId}
        aria-hidden={!isMenuOpen} // hide from SRs when closed
        onKeyDown={onPanelKeyDown} // focus trap
        className={[
          "absolute left-0 right-0 top-full z-40",
          "transition duration-300 ease-in-out will-change-transform",
          "motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100",
          "bg-zinc-900/95 border border-white/10 shadow-2xl backdrop-blur rounded-b-xl",
          "origin-top",
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none",
        ].join(" ")}
        onPointerEnter={hasFinePointer ? handlePointerEnter : undefined}
        onPointerLeave={hasFinePointer ? handlePointerLeave : undefined}
      >
        <div className="max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <nav aria-label="Primary">
            {" "}
            {/* keep semantics here */}
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

export default Header;
