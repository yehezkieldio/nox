import axios from "axios";
import { useEffect, useState } from "react";

export function Index() {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3333/api").then((res) => {
            setResponse(res.data.message);
        });
    }, []);

    return (
        <div>
            <h1>{response}</h1>
        </div>
    );
}

export default Index;
