import React, { Suspense } from "react";
import { World } from "./ui/globe";

// Global trade and technology routes for Abinexis Group
// Connecting major manufacturing, tech, and financial nodes
const GLOBE_DATA = [
  {
    order: 1,
    startLat: 28.6139,
    startLng: 77.209,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.35,
    color: "#a87f2e", // Delhi to New York
  },
  {
    order: 2,
    startLat: 19.076,
    startLng: 72.8777,
    endLat: 51.5074,
    endLng: -0.1278,
    arcAlt: 0.3,
    color: "#c89b3c", // Mumbai to London
  },
  {
    order: 3,
    startLat: 12.9716,
    startLng: 77.5946,
    endLat: 37.7749,
    endLng: -122.4194,
    arcAlt: 0.45,
    color: "#a87f2e", // Bengaluru to San Francisco
  },
  {
    order: 4,
    startLat: 19.076,
    startLng: 72.8777,
    endLat: 25.2048,
    endLng: 55.2708,
    arcAlt: 0.18,
    color: "#c89b3c", // Mumbai to Dubai
  },
  {
    order: 5,
    startLat: 12.9716,
    startLng: 77.5946,
    endLat: 1.3521,
    endLng: 103.8198,
    arcAlt: 0.22,
    color: "#a87f2e", // Bengaluru to Singapore
  },
  {
    order: 6,
    startLat: 28.6139,
    startLng: 77.209,
    endLat: 50.1109,
    endLng: 8.6821,
    arcAlt: 0.32,
    color: "#c89b3c", // Delhi to Frankfurt
  },
  {
    order: 7,
    startLat: 19.076,
    startLng: 72.8777,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.38,
    color: "#a87f2e", // Mumbai to Tokyo
  },
  {
    order: 8,
    startLat: 12.9716,
    startLng: 77.5946,
    endLat: -33.8688,
    endLng: 151.2093,
    arcAlt: 0.45,
    color: "#c89b3c", // Bengaluru to Sydney
  },
  {
    order: 9,
    startLat: 28.6139,
    startLng: 77.209,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.22,
    color: "#a87f2e", // Delhi to Hong Kong
  },
];

const GLOBE_CONFIG = {
  pointSize: 2.2,
  pointColor: "#a87f2e", // --color-gold-dim for all hub indicators
  ringColor: "#a87f2e",  // --color-gold-dim for pulsing rings
  globeColor: "#ffffff",
  showAtmosphere: true,
  atmosphereColor: "#c89b3c",
  atmosphereAltitude: 0.14,
  polygonColor: "rgba(18, 20, 43, 0.76)", // Crisp dark ink continents
  highlightColor: "#a87f2e", // --color-gold-dim for India
  emissive: "#f4f3ee",
  emissiveIntensity: 0.08,
  shininess: 0.85,
  arcTime: 1800,
  arcLength: 0.9,
  rings: 2,
  maxRings: 4,
  initialCoordinates: { lat: 20, lng: 78 }, // Center India front and center
  autoRotate: true,
  autoRotateSpeed: 0.35,
  ambientLight: "#ffffff",
  directionalLeftLight: "#fffbeb",
  directionalTopLight: "#ffffff",
  pointLight: "#fed7aa",
};

export default function HeroGlobe() {
  const containerRef = React.useRef(null);
  const [isInView, setIsInView] = React.useState(true);

  React.useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: "100px" }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero__globe-wrapper"
      aria-label="Interactive 3D Globe showing Abinexis global technology and trade network"
    >
      <div className="hero__globe-glow" />
      <div className="hero__globe-canvas-wrap">
        <Suspense fallback={<div className="hero__globe-loader" />}>
          <World globeConfig={GLOBE_CONFIG} data={GLOBE_DATA} isInView={isInView} />
        </Suspense>
      </div>
      <div className="hero__globe-badge">
        <span className="hero__globe-badge-dot" />
        <span>Global Network & Operations</span>
      </div>
    </div>
  );
}
