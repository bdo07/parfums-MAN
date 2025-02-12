export declare function useClipboard({ timeout }?: {
    timeout?: number | undefined;
}): {
    copy: (value: string) => void;
    reset: () => void;
    error: string | Error | null | undefined;
    copied: boolean;
};
