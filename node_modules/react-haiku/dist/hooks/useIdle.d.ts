declare const defaultEvents: readonly ["keypress", "mousemove", "touchmove", "click", "scroll"];
type DefaultEvent = (typeof defaultEvents)[number];
type Options = {
    events?: DefaultEvent[];
    initialState?: boolean;
};
export declare function useIdle(timeout: number, options?: Options): boolean | undefined;
export {};
