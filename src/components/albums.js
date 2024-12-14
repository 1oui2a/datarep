
import AlbumItem from "./albumitem";

const Albums = (props) => {
   
    return props.myAlbums.map(
        (album) => {
                    
            return <AlbumItem myalbum={album} key={album._id} Reload={props.ReloadData} />;
        }
    );
}

export default Albums;
