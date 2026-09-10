import { useEffect, useRef, useState, useMemo } from "react";
import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "@/data/globe.json";

extend({ ThreeGlobe });

const RING_PROPAGATION_SPEED = 3;
const aspect = 1.2;
const cameraZ = 300;

export function Globe({
  globeConfig = {},
  data = []
}) {
  const globeRef = useRef(null);
  const groupRef = useRef();
  const [isInitialized, setIsInitialized] = useState(false);

  const defaultProps = {
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: "#1d072e",
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialCoordinates: { lat: 20, lng: 77 },
    highlightColor: "#c89b3c",
    ...globeConfig,
  };

  // Initialize globe only once
  useEffect(() => {
    if (!globeRef.current && groupRef.current) {
      globeRef.current = new ThreeGlobe();
      groupRef.current.add(globeRef.current);

      // Rotate group so initialCoordinates (India) faces the camera (+Z)
      if (defaultProps.initialCoordinates) {
        const lng = defaultProps.initialCoordinates.lng ?? 78;
        const lat = defaultProps.initialCoordinates.lat ?? 20;
        // In ThreeGlobe coordinate system, rotating Y by (-lng - 90) degrees puts longitude lng facing directly forward (+Z)
        groupRef.current.rotation.y = ((-lng - 90) * Math.PI) / 180;
        groupRef.current.rotation.x = ((lat - 6) * Math.PI) / 180;
      }

      setIsInitialized(true);
    }

    return () => {
      if (globeRef.current && groupRef.current) {
        groupRef.current.remove(globeRef.current);
        globeRef.current = null;
      }
    };
  }, []);

  // Build material when globe is initialized or when relevant props change
  useEffect(() => {
    if (!globeRef.current || !isInitialized) return;

    const globeMaterial = globeRef.current.globeMaterial();
    globeMaterial.color = new Color(defaultProps.globeColor);
    globeMaterial.emissive = new Color(defaultProps.emissive);
    globeMaterial.emissiveIntensity = defaultProps.emissiveIntensity || 0.1;
    globeMaterial.shininess = defaultProps.shininess || 0.9;
  }, [
    isInitialized,
    defaultProps.globeColor,
    defaultProps.emissive,
    defaultProps.emissiveIntensity,
    defaultProps.shininess,
  ]);

  // Build data when globe is initialized or when data changes
  useEffect(() => {
    if (!globeRef.current || !isInitialized || !data) return;

    const arcs = data;
    let points = [];
    for (let i = 0; i < arcs.length; i++) {
      const arc = arcs[i];
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: arc.color,
        lat: arc.startLat,
        lng: arc.startLng,
      });
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: arc.color,
        lat: arc.endLat,
        lng: arc.endLng,
      });
    }

    // remove duplicates for same lat and lng
    const filteredPoints = points.filter((v, i, a) =>
      a.findIndex((v2) =>
        ["lat", "lng"].every((k) => v2[k] === v[k])) === i);

    globeRef.current
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .showAtmosphere(defaultProps.showAtmosphere)
      .atmosphereColor(defaultProps.atmosphereColor)
      .atmosphereAltitude(defaultProps.atmosphereAltitude)
      .hexPolygonColor((feat) => {
        if (feat.id === "356" || feat.properties?.name === "India") {
          return defaultProps.highlightColor || "#c89b3c";
        }
        return defaultProps.polygonColor;
      });

    globeRef.current
      .arcsData(data)
      .arcStartLat((d) => (d).startLat * 1)
      .arcStartLng((d) => (d).startLng * 1)
      .arcEndLat((d) => (d).endLat * 1)
      .arcEndLng((d) => (d).endLng * 1)
      .arcColor((e) => (e).color)
      .arcAltitude((e) => (e).arcAlt * 1)
      .arcStroke(() => [0.32, 0.28, 0.3][Math.round(Math.random() * 2)])
      .arcDashLength(defaultProps.arcLength)
      .arcDashInitialGap((e) => (e).order * 1)
      .arcDashGap(15)
      .arcDashAnimateTime(() => defaultProps.arcTime);

    globeRef.current
      .pointsData(filteredPoints)
      .pointColor((e) => defaultProps.pointColor || e.color || "#a87f2e")
      .pointsMerge(true)
      .pointAltitude(0.01)
      .pointRadius(defaultProps.pointSize || 2);

    globeRef.current
      .ringsData([])
      .ringColor((e) => (t) => defaultProps.ringColor || e.color || defaultProps.polygonColor)
      .ringMaxRadius(defaultProps.maxRings)
      .ringPropagationSpeed(RING_PROPAGATION_SPEED)
      .ringRepeatPeriod((defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings);
  }, [
    isInitialized,
    data,
    defaultProps.pointSize,
    defaultProps.showAtmosphere,
    defaultProps.atmosphereColor,
    defaultProps.atmosphereAltitude,
    defaultProps.polygonColor,
    defaultProps.arcLength,
    defaultProps.arcTime,
    defaultProps.rings,
    defaultProps.maxRings,
  ]);

  // Handle rings animation with cleanup
  useEffect(() => {
    if (!globeRef.current || !isInitialized || !data || data.length === 0) return;

    const interval = setInterval(() => {
      if (!globeRef.current) return;

      const newNumbersOfRings = genRandomNumbers(0, data.length, Math.floor((data.length * 4) / 5));

      const ringsData = data
        .filter((d, i) => newNumbersOfRings.includes(i))
        .map((d) => ({
          lat: d.startLat,
          lng: d.startLng,
          color: defaultProps.ringColor || d.color || "#a87f2e",
        }));

      globeRef.current.ringsData(ringsData);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [isInitialized, data]);

  return <group ref={groupRef} />;
}

export function WebGLRendererConfig() {
  const { gl, size, camera } = useThree();

  useEffect(() => {
    gl.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    gl.setClearColor(0x000000, 0);
  }, [gl]);

  useEffect(() => {
    camera.aspect = size.width / size.height;
    camera.updateProjectionMatrix();
  }, [camera, size]);

  return null;
}

export function World(props) {
  const { globeConfig = {}, isInView = true } = props;
  const scene = useMemo(() => {
    const s = new Scene();
    s.fog = new Fog(0xffffff, 400, 2000);
    return s;
  }, []);

  const responsiveCameraZ = useMemo(() => {
    if (typeof window !== "undefined" && window.innerWidth <= 600) {
      return 320;
    }
    return cameraZ;
  }, []);

  const camera = useMemo(() => {
    const cam = new PerspectiveCamera(50, aspect, 180, 1800);
    cam.position.set(0, 0, responsiveCameraZ);
    return cam;
  }, [responsiveCameraZ]);

  return (
    <Canvas
      scene={scene}
      camera={camera}
      dpr={[1, 1.5]}
      frameloop={isInView ? "always" : "never"}
      gl={{
        powerPreference: "high-performance",
        antialias: true,
        alpha: true,
        stencil: false,
      }}
    >
      <WebGLRendererConfig />
      <ambientLight color={globeConfig.ambientLight || "#ffffff"} intensity={globeConfig.ambientIntensity ?? 1.1} />
      <directionalLight
        color={globeConfig.directionalLeftLight || "#ffffff"}
        position={new Vector3(-400, 150, 400)}
        intensity={globeConfig.directionalLeftIntensity ?? 0.8} />
      <directionalLight
        color={globeConfig.directionalTopLight || "#ffffff"}
        position={new Vector3(200, 500, 300)}
        intensity={globeConfig.directionalTopIntensity ?? 0.8} />
      <pointLight
        color={globeConfig.pointLight || "#ffffff"}
        position={new Vector3(0, 300, 350)}
        intensity={globeConfig.pointLightIntensity ?? 0.6} />
      <Globe {...props} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={responsiveCameraZ}
        maxDistance={responsiveCameraZ}
        autoRotateSpeed={globeConfig.autoRotateSpeed ?? 0.4}
        autoRotate={globeConfig.autoRotate ?? true}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3} />
    </Canvas>
  );
}

export function hexToRgb(hex) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function genRandomNumbers(min, max, count) {
  const arr = [];
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (arr.indexOf(r) === -1) arr.push(r);
  }

  return arr;
}
