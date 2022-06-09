import { useEffect, useState } from "react";

const useCustom = (text: string) => {
    const [data, setData] = useState("");

    useEffect(() => {
        setData("init data, wait to process");
        const timeout = setTimeout(() => {
            setData("Oo, new init data! " + text);
        }, 5000)

        return () => {
            clearTimeout(timeout);
        }
    }, [text])

    return { data };
}

export default useCustom;