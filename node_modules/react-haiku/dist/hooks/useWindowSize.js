import { useState, useEffect } from "react";
export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window?.innerWidth || 0,
        height: window?.innerHeight || 0
    });
    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== "undefined") {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
};
