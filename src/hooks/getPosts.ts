import { useCallback } from 'react';
import { useState } from 'react';

type ProcessState = 'error' | 'loading' | 'success';

export default function GetPosts() {
    const [process, setProcess] = useState<ProcessState>('loading');

    const request = useCallback(async () => {
        try {
            const response = await fetch(
                'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Floeclos.medium.com%2Ffeed'
            );

            if (!response.ok) {
                setProcess('error');
            }

            const data = await response.json();
            setProcess('success');
            return data;
        } catch (error) {
            setProcess('error');
            throw error;
        }
    }, []);


    const clearError = useCallback(() => {
        setProcess('loading');
    }, []);


    return {
        request,
        clearError,
        process,
        setProcess,
    };
}
