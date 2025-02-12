type IntersectionObserverOptions = {
    threshold?: number | number[];
    rootMargin?: string;
};
type UseIntersectionObserverProps = {
    animateOnce?: boolean;
    options?: IntersectionObserverOptions;
};
type IntersectionObserverResult = {
    observeRef: React.MutableRefObject<Element | null>;
    isVisible: boolean;
};
export declare const useIntersectionObserver: ({ animateOnce, options }?: UseIntersectionObserverProps) => IntersectionObserverResult;
export {};
