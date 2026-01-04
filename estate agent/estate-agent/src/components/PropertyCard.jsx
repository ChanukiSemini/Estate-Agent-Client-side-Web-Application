import React from 'react';
import {Link} from "react-router-dom";

const  PropertyCard= ({property,addToFavourites}) => {
  const{
     id,
     type,
     bedrooms,
     price,
     tenure,
     location,
     description,
     thumbnail,
     added
  }=property

  const handleDraggingStart =(e)=>{
    e.dataTransfer.setData(
      "property",
      JSON.stringify(property)
    );
  }


  return (
    <article className="property-card" draggable onDragStart={handleDraggingStart}>
        {/*Thumbnail Images */}
        <div className="full-Property-card">
          <div className='property-image'>
              <img 
              src={`/${thumbnail}`} 
              alt={type} 
              className='property-thumbnail' 
              />
            </div>

            <div className='property-info'>
              <h3 className='property-price'>RS. {price.toLocaleString()}</h3>
              <p className='property-tenure'>{tenure}</p>
              <p className='property-type'>{type}</p>
              <p className='property-location'>{location}</p>
              <p className='property-beds'>{bedrooms} Bedrooms</p>
              <p className="property-Description">{description}</p>
              <p className='property-year'>Added: {added.month}{added.day},{added.year}</p>

              <div className="card-buttons">
                <Link to={`/property/${id}`} className="view-property-btn">
                    view property
                </Link>

                <button className="favourite-btn" onClick={()=>addToFavourites(property)}>
                  Add to Favourite
                </button>
              </div>
            </div>

        </div>

    </article>
  );
};

export default PropertyCard;