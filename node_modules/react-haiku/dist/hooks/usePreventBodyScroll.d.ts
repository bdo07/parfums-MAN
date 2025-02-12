type PreventBodyScrollResult = {
    isScrollLocked: boolean;
    setIsScrollLocked: React.Dispatch<React.SetStateAction<boolean>>;
    toggleScrollLock: () => void;
};
export declare function usePreventBodyScroll(): PreventBodyScrollResult;
export {};
