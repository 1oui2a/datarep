import axios from "axios";
import { useState, useEffect } from "react";
import Albums from "./albums";

function ReadAlbum() {
    const [data, setData] = useState([]);

    const Reload = () => {
        console.log("Reloading album data...");
        axios.get('http://localhost:4000/api/albums')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error reloading data:", error);
            });
    };

    useEffect(() => {
        Reload();
    }, []);

    return (
        <div>
            <h2>Album List</h2>
            <Albums myAlbums={data} ReloadData={Reload} />
        </div>
    );
}

export default ReadAlbum;
