import React, { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {

        const abortController = new AbortController();

        setTimeout(() => {
            fetch(url, {signal: abortController.signal})
                .then(res => {
                    if(res.ok) {
                        return res.json()
                    }
                    else {
                        throw Error('Couldnt fetch the data');
                    }
                })
                .then((data) => {
                    console.log(data)
                    setData(data)
                    setIsLoading(false);
                    setError(null);
                })
                .catch((error) => {
                    if(error.name === 'AbortError') {
                        console.log('fetch abort')
                    } 
                    else {
                        setIsLoading(false);
                        setError(error)
                    }
                })
            }, 1000)

       return () => abortController.abort()
    }, [url]);

    return {data, isLoading, error}
}

export default useFetch
