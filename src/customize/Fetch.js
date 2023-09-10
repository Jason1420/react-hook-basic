import { useEffect, useState } from "react"
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isErr, setIsErr] = useState(false);
    useEffect(() => {
        try {
            async function fetchData() {
                let res = await axios.get(url)
                let data = res && res.data ? res.data : []
                setData(data);
                setIsLoading(false)
                setIsErr(false)
            }
            fetchData();
        } catch (e) {
            setIsErr(true)
            setIsLoading(false)
            console.log(e.name + ': ' + e.message)
        }
    }, [url])
    return {
        data, isLoading, isErr
    }
}

export default useFetch;