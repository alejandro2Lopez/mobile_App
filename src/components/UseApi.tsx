import { useEffect, useState } from 'react';
import axios from 'axios'

function UseApi(url: any) {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const config = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }
        setLoading(true);

        axios.get(url, config).then((response) => { setData(response.data) })
        .catch((err) => { setError(err); })
        .finally(() => { setLoading(false); });
    }
        ,[url])

const refetch= (body:any)=>{
    const config={
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }
    setLoading(true);

    axios.post(url, body)
    .then((response) => { setData(response.data) })
    .catch((err) => { setError(err); })
    .finally(() => { setLoading(false); });
};

const delet = (id = 0) => {

    const config = {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }
    setLoading(true);
    axios.delete(`${url}/${id}`)
        .then(() => console.log("Hecho"));

}

return {data, loading,error, refetch, delet}
}
export default UseApi;