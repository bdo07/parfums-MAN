import { type MouseEvent, type TouchEvent } from 'react';
type EventType = MouseEvent | TouchEvent;
export declare const useHold: (callback: (e: EventType) => any, { doPreventDefault, delay }?: {
    doPreventDefault?: boolean | undefined;
    delay?: number | undefined;
}) => {
    onMouseDown: (e: MouseEvent) => void;
    onTouchStart: (e: TouchEvent) => void;
    onMouseUp: () => void;
    onMouseLeave: () => void;
    onTouchEnd: () => void;
};
export {};
