import { useEffect, useState, useRef } from "react";
export const useIntersectionObserver = ({ animateOnce = false, options = {} } = {}) => {
    const observeRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    if (typeof IntersectionObserver === "undefined") {
        console.warn("IntersectionObserver is not supported in this browser.");
        return { observeRef, isVisible: true };
    }
    useEffect(() => {
        const currentRef = observeRef.current;
        if (!currentRef)
            return;
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (!entry)
                return;
            setIsVisible(entry.isIntersecting);
            if (entry.isIntersecting && animateOnce) {
                observer.disconnect();
            }
        }, options);
        observer.observe(currentRef);
        return () => {
            observer.disconnect();
        };
    }, [observeRef, animateOnce, options]);
    return { observeRef, isVisible };
};
