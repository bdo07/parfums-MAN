declare const useMutation: (apiUrl: string, payload: any, headers?: Record<string, string>, options?: {
    method?: string;
    timeout?: number;
}, onSuccess?: ((data: any) => void) | undefined, onError?: ((error: string) => void) | undefined) => {
    loading: boolean;
    response: any;
    error: string | null;
};
export default useMutation;
