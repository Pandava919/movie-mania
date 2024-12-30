import axios from 'axios';
import { useEffect } from 'react'
import { useState } from 'react'

const useFetch = (apiUrl, options) => {
    const [apiData, setApiData] = useState();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get(apiUrl)
                if (isMounted) {
                    setApiData(data)
                    setLoading(false)
                }
            } catch (error) {
                console.log(error.message);
                if (isMounted) setLoading(false)
            }
        };
        fetchData()
        return () => {
            isMounted = false
        }
    }, [apiUrl, options])

    return { apiData, loading }
}

export default useFetch
