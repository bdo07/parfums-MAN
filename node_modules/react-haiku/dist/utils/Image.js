import { jsx as _jsx } from "react/jsx-runtime";
export const Image = ({ src, loading, alt, fallback, ...props }) => {
    const handleBrokenImage = (event) => (event.target.src = fallback);
    return (_jsx("img", { src: src, loading: loading, alt: alt, onError: handleBrokenImage, ...props }));
};
