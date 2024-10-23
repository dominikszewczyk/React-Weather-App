import { useState, useEffect} from 'react'

export default function useFetchData( url ) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url]);
        
  return [ data, error, isLoading ];
}