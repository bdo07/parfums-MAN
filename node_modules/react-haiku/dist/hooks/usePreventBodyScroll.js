import { useEffect, useState } from 'react';
var ScrollState;
(function (ScrollState) {
    ScrollState["SCROLL"] = "";
    ScrollState["LOCK"] = "hidden";
})(ScrollState || (ScrollState = {}));
export function usePreventBodyScroll() {
    const [isScrollLocked, setIsScrollLocked] = useState(false);
    useEffect(() => {
        if (isScrollLocked) {
            document.body.style.overflow = ScrollState.LOCK;
        }
        else {
            document.body.style.overflow = ScrollState.SCROLL;
        }
        return () => {
            document.body.style.overflow = ScrollState.SCROLL;
        };
    }, [isScrollLocked]);
    const toggleScrollLock = () => setIsScrollLocked((prevState) => !prevState);
    return {
        isScrollLocked,
        setIsScrollLocked,
        toggleScrollLock,
    };
}
