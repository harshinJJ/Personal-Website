import { useEffect } from "react";

export const useLoadMore = (buttonId, containerId) => {
  useEffect(() => {
    const btn = document.getElementById(buttonId);
    const more = document.getElementById(containerId);

    if (!btn || !more) return;

    btn.onclick = () => {
      more.style.display = "grid";
      btn.style.display = "none";
    };
  }, [buttonId, containerId]);
};
