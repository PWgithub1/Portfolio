import { useRef, useEffect } from "react";

const GridWarpBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursor = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      cursor.current.x = e.clientX + window.scrollX;
      cursor.current.y = e.clientY + window.scrollY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const gridSpacing = 40;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const time = Date.now() * 0.001;

      for (let x = 0; x < canvas.width; x += gridSpacing) {
        for (let y = 0; y < canvas.height; y += gridSpacing) {
          const dx = x - cursor.current.x;
          const dy = y - cursor.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const warp = Math.min(50, 2000 / (dist + 50));

          const blend = (Math.sin((x + y) * 0.02 + time) + 1) / 2;
          const r = Math.round(200 * (1 - blend));
          const g = 0;
          const b = Math.round(255 * blend);

          ctx.strokeStyle = `rgb(${r},${g},${b})`;

          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(
            x + Math.sin(time + y * 0.05) * warp,
            y + Math.cos(time + x * 0.05) * warp
          );
          ctx.stroke();
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
};

export default GridWarpBackground;