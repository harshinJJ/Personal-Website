import { useEffect } from "react";

export const useAboutParallax = () => {
  useEffect(() => {
    const handleScroll = () => {
      const about = document.querySelector(".about-section");
      if (!about) return;

      const rect = about.getBoundingClientRect();
      const scrollAmount = window.innerHeight - rect.top;

      if (scrollAmount > 0) {
        const offset = scrollAmount * 0.04;

        const title = document.querySelector(".about-title");
        const photo = document.querySelector(".photo-card");
        const icons = document.querySelector(".floating-icons");

        if (title) title.style.transform = `translateY(${offset * 0.4}px)`;
        if (photo) photo.style.transform = `translateY(${offset * 0.25}px)`;
        if (icons) icons.style.transform = `translateY(${offset * 0.6}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};
