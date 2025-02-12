export const on = (obj, ...args) => {
    // @ts-ignore
    if (obj && obj.addEventListener)
        obj.addEventListener(...args);
};
export const off = (obj, ...args) => {
    // @ts-ignore
    if (obj && obj.addEventListener)
        obj.removeEventListener(...args);
};
