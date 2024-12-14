import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import axios from "axios";

const AlbumItem = (props) => {

  const handleDelete = (e) => {
    e.preventDefault();
    axios.delete('http://localhost:4000/api/album/' + props.myalbum._id)
        .then(() => {
            props.Reload();
        })
        .catch((error) => {
            console.error("Error deleting album:", error);
        });
  };

  useEffect(() => {
    console.log("Album Item:", props.myalbum);
  }, [props.myalbum]);

  return (
    <div>
      <Card>
        <Card.Header>{props.myalbum.name}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={props.myalbum.image} alt={props.myalbum.name} />
            <footer>{props.myalbum.genre}</footer>
            <footer>{props.myalbum.artist}</footer>
          </blockquote>
        </Card.Body>
        <Link className="btn btn-primary" to={"/editalbum/" + props.myalbum._id}>Update</Link>
        <Button className="btn btn-danger" onClick={handleDelete}>Delete</Button>
      </Card>
    </div>
  );
}

export default AlbumItem;
