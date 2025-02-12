export declare const parseToDataType: (value: string | undefined, isItRetry?: boolean) => any;
export declare const parseToCookieType: <T>(value: T) => string;
export declare const getCookie: (name: string) => any;
export declare const getCookies: (cookies?: string[]) => any;
export declare const setCookie: <T>(name: string, value: T, expireDays: number) => void;
export declare const deleteCookie: (name: string) => void;
