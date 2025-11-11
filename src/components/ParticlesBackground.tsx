"use client";

/* ================================
   Imports
   --------------------------------
   - React hooks for state & memoization
   - tsParticles React component + init helper
   - "slim" bundle loader (smaller than full engine)
   - Type for strong-typed options
==================================*/
import { useEffect, useMemo, useState } from "react";
import { initParticlesEngine, Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

/* ================================
   Component: ParticlesBackground
   --------------------------------
   Renders a full-bleed particle network
   behind your content.
==================================*/
export default function ParticlesBackground() {
  /* --------------------------------
     Local state: ready
     - false until the engine finishes loading
     - prevents rendering the <Particles /> before init
  ----------------------------------*/
  const [ready, setReady] = useState(false);

  /* ================================
     Engine Initialization (once)
     --------------------------------
     - Loads the slim engine bundle
     - Sets ready=true when done
     - Any init errors log to console
  ==================================*/
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Load the lightweight preset (shapes, movers, links, etc.)
      await loadSlim(engine);
    })
      .then(() => setReady(true))
      .catch((err) => console.error("Error initializing particles:", err));
  }, []);

  /* ================================
     Options (memoized)
     --------------------------------
     - All visual + behavior tuning for the scene
     - Memoized so it’s stable across renders
  ==================================*/
  const options: ISourceOptions = useMemo(
    () => ({
      /* ========= Background =========
         Purely aesthetic: the canvas background
         (Your page also has bg-black; this matches it.)
      =================================*/
      background: { color: { value: "#0a0a0a" } },

      /* ========= Performance ========
         Clamp FPS if needed (60 is smooth & friendly)
      =================================*/
      fpsLimit: 60,

      /* ========== Interactivity ==========
         Cursor interactions: how the web responds to hover/click/resize
         - onHover + "grab": draw temporary lines to the cursor within a radius
         - resize: recompute safely on viewport changes
         - modes.grab: fine-tunes the effect (distance + link opacity)
      =====================================*/
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          // onClick: { enable: true, mode: "repulse" }, // Optional breakup on click
          resize: true,
        },
        modes: {
          grab: { distance: 180, links: { opacity: 0.75 } },
          // repulse: { distance: 220, duration: 0.4 }, // If you re-enable onClick
        },
      },

      /* ============= Particles =============
         The stars of the show:
         - number/density: how many dots across a logical area
         - color: node color
         - links: connective tissue (range, opacity, width, max links)
         - size/opacity/shape: visual polish
         - move: “tempo” (speed range, randomization, boundary behavior)
      =======================================*/
      particles: {
        /* ----- Population & Spread ----- */
        number: {
          value: 160, // Total count target -> Increase to make it denser
          density: { enable: true, area: 1100 }, // Larger area → looser clusters
        },

        /* ----- Node Appearance ----- */
        color: { value: "#e62424" }, // Neon mint nodes
        opacity: { value: 0.55 }, // Soft glow
        animation: {
          enable: true,
          speed: 0.3,
          minimumValue: 0.35,
          sync: false,
        },
        shape: { type: "circle" }, // Circles (you can try "triangle", "edge", etc.)
        size: { value: { min: 0.8, max: 2.2 } }, // Subtle size variety = organic feel

        /* ----- Connections (the web) ----- */
        links: {
          color: "#e62424", // Link color (match node color for cohesion)
          distance: 150, // Max distance to draw a line
          enable: true, // Turn lines on
          opacity: 0.45, // Line transparency
          width: 1.3, // Line thickness
          limit: 2, // Max links per particle (prevents huge hairballs)
        },

        /* ----- Motion (the rhythm) ----- */
        move: {
          enable: true, // Animate!
          speed: { min: 0.12, max: 0.35 }, // Gentle drift range
          direction: "none", // No global wind
          random: true, // Each particle gets its own speed
          straight: false, // Not straight lines—organic wandering
          outModes: { default: "bounce" }, // Bounce at edges (keeps them on stage)
          drift: 0, // 0 = no rightward/leftward bias
          attract: { enable: false }, // Don’t clump by attraction
        },
      },

      /* ===== Retina Support =====
         Sharper rendering on high-density displays
      ============================*/
      detectRetina: true,
    }),
    []
  );

  /* ================================
     Guard: don’t render until ready
  ==================================*/
  if (!ready) return null;

  /* ================================
     Render
     --------------------------------
     - Full-bleed canvas positioned behind content
     - z-0 sits beneath your z-10 text wrapper
     - style width/height enforce full cover
  ==================================*/
  return (
    <Particles
      id="tsparticles"
      options={options}
      className="absolute inset-0 z-0"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
