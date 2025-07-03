"use client";
import { useEffect } from "react";

export function UseDisableZoom() {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content =
      "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no";
    document.head.appendChild(meta);

    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "auto";
    document.documentElement.style.overflowX = "hidden";
    document.documentElement.style.overflowY = "auto";

    const onGestureStart = (e: Event) => e.preventDefault();
    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey) e.preventDefault();
    };

    document.addEventListener("gesturestart", onGestureStart);
    document.addEventListener("wheel", onWheel, { passive: false });

    document.body.style.userSelect = "none";
    document.body.style.webkitUserSelect = "none";

    const onContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", onContextMenu);

    return () => {
      document.removeEventListener("gesturestart", onGestureStart);
      document.removeEventListener("wheel", onWheel);
      document.removeEventListener("contextmenu", onContextMenu);
    };
  }, []);

  return <></>;
}
