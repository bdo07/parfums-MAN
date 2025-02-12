export declare function useTabNotification(flashDelayInSeconds?: number): {
    setTitlePrefix: import("react").Dispatch<import("react").SetStateAction<string | null>>;
    setFlashMessage: import("react").Dispatch<import("react").SetStateAction<string | null>>;
    isShown: boolean;
    setIsShown: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    setCustomTitle: import("react").Dispatch<import("react").SetStateAction<string | null>>;
    setShowFaviconDot: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    setFaviconDotColor: import("react").Dispatch<import("react").SetStateAction<string>>;
};
