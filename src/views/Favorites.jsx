import Gallery from "../components/Gallery";

const Favorites = () => {
  
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 grid-columns-4 ">
        <Gallery filter={'favoritos'}/>
      </div>
    </div>
  );
};
export default Favorites;
