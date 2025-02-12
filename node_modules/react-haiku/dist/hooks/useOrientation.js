import { useState, useEffect } from "react";
export const useOrientation = () => {
    const [orientation, setOrientation] = useState(window.matchMedia("(orientation: portrait)").matches
        ? "portrait"
        : "landscape");
    useEffect(() => {
        const handleOrientationChange = (e) => {
            setOrientation(e.matches ? "portrait" : "landscape");
        };
        const portraitMediaQuery = window.matchMedia("(orientation: portrait)");
        portraitMediaQuery.addEventListener("change", handleOrientationChange);
        return () => portraitMediaQuery.removeEventListener("change", handleOrientationChange);
    }, []);
    return orientation;
};
