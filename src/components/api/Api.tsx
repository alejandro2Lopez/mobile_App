import { useEffect, useState } from "react";
import axios from "axios";

function UseApi(url: any) {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [validation, setValidation] = useState(0);


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
            .then((response) => { })
            .catch((err) => { setError(err); })
            .finally(() => { setLoading(false); });
    }, [url]);

    const refetch = (body: any) => {
        const config = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }
        setLoading(true);

        axios
            .post(url, body)
            .then((response) => { setData(response.data) })
            .catch((err) => { setError(err); })
            .finally(() => { setLoading(false); });
    };


    const post = (data: any) => {

        const config = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        };

        setLoading(true);
        axios
            .post(url, data, config)
            .then((response) => { sessionStorage.setItem("Id", response.data.client.id) })
            .catch((err) => { setError(err); })
            .finally(() => { setLoading(false); });


    }

    const put = (data: any, id: any) => {

        const config = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        };

        setLoading(true);
        axios
            .put(`${url}/${id}`, data, config)
            .then((response) => { })
            .catch((err) => { setError(err); })
            .finally(() => { setLoading(false); });
    };

    const delet1 = (url: any) => {
        const config = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        };

        setLoading(true);
        axios
            .delete(url, config)
            .then(() => console.log("Hecho"))
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

    return { validation, data, loading, error, post, put, delet, delet1, refetch };
}

export default UseApi;