import React, { useEffect, useState } from "react";
import axios from "axios";

const DataDisplay = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("/api/data")
            .then(response => {
                setData(response.data.map(data => data.Description));
            })
            .catch(error => {
                console.error("Error fetching data!", error);
            });
    }, []);

    return (
        <div>
            <h1>Todos</h1>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            <ul>
                {data.map((description, index) => (
                    <li key={index}>{description}</li>
                ))}
            </ul>
        </div>
    );
};

export default DataDisplay;