import { createContext, useState, useEffect } from "react";
const API = "../../public/photos.json"

export const GalleryContext = createContext();

const GalleryProvider = ({children}) =>{
    const [photos, setPhotos] = useState([]);

    const getPhotos = async () =>{
        try{
        const response = await fetch(API)
        const data = await response.json()
        setPhotos(data.photos)
        }catch(error){
        console.log(error)
        }
    }

    useEffect(() =>{
        getPhotos()
    }, []);
    
    return(
        <GalleryContext.Provider value={{photos, setPhotos}}>
            {children}
        </GalleryContext.Provider>
    );
};

export default GalleryProvider