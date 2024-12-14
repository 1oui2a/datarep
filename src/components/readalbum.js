import axios from "axios";
import { useState, useEffect } from "react";
import Albums from "./albums";

function ReadAlbum() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]); // For filtered albums
    const [searchQuery, setSearchQuery] = useState(""); // Search query state

    const Reload = () => {
        console.log("Reloading album data...");
        axios.get('http://localhost:4000/api/albums')
            .then((response) => {
                setData(response.data);
                setFilteredData(response.data); // Initialize filteredData with all albums
            })
            .catch((error) => {
                console.error("Error reloading data:", error);
            });
    };

    useEffect(() => {
        Reload();
    }, []);

    // Function to handle search input
    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        const filteredAlbums = data.filter((album) =>
            album.name.toLowerCase().includes(query) // Search by album name
        );

        setFilteredData(filteredAlbums);
    };

    return (
        <div>
            <h2>Album List</h2>

            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search for an album..."
                value={searchQuery}
                onChange={handleSearch}
                style={{ marginBottom: "20px", padding: "8px", width: "300px" }}
            />

            {/* Pass filteredData instead of data */}
            <Albums myAlbums={filteredData} ReloadData={Reload} />
        </div>
    );
}

export default ReadAlbum;
