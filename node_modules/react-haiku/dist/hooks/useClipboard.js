import { useState } from 'react';
export function useClipboard({ timeout = 500 } = {}) {
    const [error, setError] = useState(null);
    const [copied, setCopied] = useState(false);
    const [copyTimeout, setCopyTimeout] = useState(undefined);
    const handleCopyResult = (hasError) => {
        clearTimeout(copyTimeout);
        setCopyTimeout(setTimeout(() => setCopied(false), timeout));
        setCopied(hasError);
    };
    const copy = (value) => {
        if ('clipboard' in navigator) {
            navigator.clipboard
                .writeText(value)
                .then(() => handleCopyResult(true))
                .catch((err) => setError(err));
        }
        else {
            setError(new Error('Error: navigator.clipboard is not supported'));
        }
    };
    const reset = () => {
        setError(null);
        setCopied(false);
        clearTimeout(copyTimeout);
    };
    return { copy, reset, error, copied };
}
