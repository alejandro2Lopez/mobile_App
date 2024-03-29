import { useEffect, useState } from "react";
import axios from "axios";

function Obtain(url: any) {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        const config = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        };

         
        setLoading(true);
        axios
            .get(url, config)
            .then((response) => { setData(response.data); })
            .catch((err) => { setError(err); })
            .finally(() => { setLoading(false); });

    }, [url]);

    return { data }
} 

export default Obtain;