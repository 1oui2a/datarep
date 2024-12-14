import axios from "axios";
import { useState } from "react";

const CreateAlbum = () => {

    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [artist, setArtist] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const album = {name, genre, artist, image};
        console.log(album);

        axios.post('http://localhost:4000/api/albums',album)
        .then((res)=>{console.log(res.data)})
        .catch();
    }

    return (
        <div>
   
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Album Name: </label>
                    <input type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Album Genre: </label>
                    <input type="text"
                        className="form-control"
                        value={genre}
                        onChange={(e) => { setGenre(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Album Artist: </label>
                    <input type="text"
                        className="form-control"
                        value={artist}
                        onChange={(e) => { setArtist(e.target.value) }}
                    />
                    
                </div>
               
                <div className="form-group">
                    <label>Add Album Image: </label>
                    <input type="text"
                        className="form-control"
                        value={image}
                        onChange={(e) => { setImage(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit" value="Add Album"></input>
                </div>
            </form>
        </div>
    );
}
export default CreateAlbum;