import { useEffect } from "react";

export function useParallax() {
  // Mouse move parallax
  useEffect(() => {
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;

      document.querySelectorAll("[data-parallax]").forEach((el) => {
        const depth = parseFloat(el.dataset.depth || 1);
        el.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Scroll parallax
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY * 0.05;
      document.querySelectorAll("[data-depth]").forEach((el) => {
        const depth = parseFloat(el.dataset.depth || 1);
        el.style.transform = `translateY(${y * depth}px)`;
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
