export declare function handleChange<T>(setValue: React.Dispatch<any>): (val: T) => void;
export declare function useInputValue<T>(initialState: T): (T | ((val: T) => void))[];
