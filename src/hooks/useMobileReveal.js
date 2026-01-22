import { useEffect } from "react";

export const useMobileReveal = () => {
  useEffect(() => {
    if (window.innerWidth > 768) return;

    const elements = document.querySelectorAll(".m-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 },
    );

    elements.forEach((el) => observer.observe(el));
  }, []);
};
