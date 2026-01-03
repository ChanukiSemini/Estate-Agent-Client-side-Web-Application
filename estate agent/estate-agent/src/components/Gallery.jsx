import React,{useEffect,useState} from 'react';
import PropertyCard from './PropertyCard';
import Favourites from './Favourites';


const Gallery = ({searchTerm,favourites,setFavourites}) => {
  const[properties,setProperties]=useState([]);

  useEffect(() => {
    fetch("/properties.json")
      .then((response) => response.json())
      .then((data) => { setProperties(data.properties)})
      .catch((error) => {
        console.error("Error on loading properties:", error);
      });
  }, []);
  
  {/*Add to favourite function */}
  const addToFavourites=(property)=>{
    if(!favourites.find((fav)=>fav.id===property.id))
      setFavourites([...favourites,property]);
  }

  {/*Remove From favourite function */}
  const removeFavourite=(id)=>{
    setFavourites(favourites.filter((fav)=>fav.id !==id));
  }

  {/*Filters */}
  const filteredProperties=properties.filter((property)=>{
    return(
      (!searchTerm.location || 
        property.location.toLowerCase().includes
        (searchTerm.location.toLowerCase()
      )) &&
      (!searchTerm.type || 
        property.type===searchTerm.type
      )&&
      (!searchTerm.bedrooms ||
         property.bedrooms >=Number(searchTerm.bedrooms)
        )&&
      (!searchTerm.minPrice ||
        property.price>=Number(searchTerm.minPrice)
      )&&
      (!searchTerm.maxPrice ||
        property.price<=Number(searchTerm.maxPrice)
      )&&
      (!searchTerm.year ||
        property.added.year >=Number(searchTerm.year)
      )

    );
  });

  const removedDropHandle=(e)=>{
    e.preventDefault();
    const propertyId = e.dataTransfer.getData("propertyId");
    if(propertyId){
      removeFavourite(propertyId);
    }
  }

  return (
    <section className="gallery">
      <div className="main-gallery"
      onDragOver={(e)=>e.preventDefault()}
      onDrop={removedDropHandle}>

        {filteredProperties.length ===0 ? (
          <p className="No-result">No properties found for the selected filters</p>
        ):(
            <div className="gallery-grid">
                {filteredProperties.map((property)=>(
                  <PropertyCard
                  key={property.id}
                  property={property}
                  addToFavourites={addToFavourites}
                  />

                ))}
            </div>
          
        )}
      </div>

      {/*side Bar-Favourites */}
      <Favourites
      favourites={favourites}
      removeFavourite={removeFavourite}
      clearFavourites={()=>setFavourites([])}
      addToFavourites={addToFavourites}/>
    </section>
  );
};

export default Gallery;