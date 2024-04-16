import { useContext } from "react";
import { GalleryContext } from "../context/GalleryContext";
import IconHeart from "./IconHeart";

const Gallery = ({filter = 'home'}) => {
  const {photos} = useContext(GalleryContext)


  return (
  <div className="gallery grid-columns-5 p-3">
    {photos
        .filter((photo) => (filter === 'favoritos' ? photo.liked === true : true)).map((photo) => (
    <div className="card text-bg-dark" key={photo.id}>
      <img src={photo.src.tiny} className="card-img" alt={photo.alt} />
      <div className="card-img-overlay d-flex flex-column justify-content-between align-items-end">
        <IconHeart id={photo.id}/>
        <p className="card-text"><small>{photo.alt}</small></p>
      </div>
  </div>
    ))}
  </div>
)
};
export default Gallery;
