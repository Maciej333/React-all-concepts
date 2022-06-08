import axios from 'axios';
import { useEffect, useState } from "react";

const useApi = (url: string, method: "get" | "post" | "put" | "delete", resDataType: any, bodyData?: any) => {

    const [data, setData] = useState(resDataType);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        setData(null);
        setError("");

        const axiosConfig = {
            method: method,
            url: url,
            headers: {
                'content-type': 'application/json;charset=UTF-8',
            },
            signal: controller.signal,
            data: bodyData ? bodyData : null,
        };

        axios(axiosConfig)
            .then(res => {
                const resData = res.data as typeof resDataType;
                setData(resData);
                setError("");
            })
            .catch(err => {
                setData(null);
                setError(`[useApi Error] = ${err.message}`)
            })
            .finally(() => {
                setLoading(false)
            });
        return () => {
            controller.abort();
        }
    }, [url]);

    return { data, loading, error };
}
export default useApi;
