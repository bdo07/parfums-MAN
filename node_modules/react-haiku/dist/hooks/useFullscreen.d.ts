import React from 'react';
export declare function useFullscreen(targetRef: React.MutableRefObject<(Document & {}) | any>): {
    isFullscreen: boolean;
    toggleFullscreen: () => void;
};
