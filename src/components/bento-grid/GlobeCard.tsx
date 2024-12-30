"use client";

import createGlobe from "cobe";
import { motion } from "framer-motion";
import { Card } from "../../components/ui/card";
import { useRef, useEffect } from "react";

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 400 * 2,
      height: 400 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // Locations in India and a few global ones for variety
        { location: [23.0225, 72.5714], size: 0.05 }, // Ahmedabad
        { location: [22.3039, 73.1812], size: 0.05 }, // Vadodara
        { location: [26.9124, 75.7873], size: 0.05 }, // Jaipur
        { location: [19.0760, 72.8777], size: 0.05 }, // Mumbai
        { location: [22.5726, 88.3639], size: 0.05 }, // Kolkata
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 400, height: 400, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};

export function GlobeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="col-span-4 h-80 md:h-full row-span-2 md:col-span-2"
    >
      <Card className="h-full p-6 backdrop-blur-sm overflow-hidden border-2 border-neutral-600 relative group">
        <h2 className="text-xl font-semibold mb-2 relative z-20">Global Reach</h2>
        <p className="text-muted-foreground relative z-20">Working with clients worldwide</p>
        <Globe className="absolute left-2 md:-bottom-48 md:left-11 h-24 w-24 text-primary z-20" />
        <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity" />
      </Card>
    </motion.div>
  );
}
