import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function EditAlbum(props) {
  let { id } = useParams();
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [artist, setArtist] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:4000/api/album/' + id)
      .then((response) => {
        setName(response.data.name);
        setGenre(response.data.genre);
        setArtist(response.data.artist);
        setImage(response.data.image);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newAlbum = { id, name, genre, artist, image };
    axios.put('http://localhost:4000/api/album/' + id, newAlbum)
      .then((res) => {
        console.log(res.data);
        navigate('/readalbum');
      });
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
