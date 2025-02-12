import { ImgHTMLAttributes } from 'react';
type Props = ImgHTMLAttributes<HTMLImageElement> & {
    fallback: string;
};
export declare const Image: ({ src, loading, alt, fallback, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
