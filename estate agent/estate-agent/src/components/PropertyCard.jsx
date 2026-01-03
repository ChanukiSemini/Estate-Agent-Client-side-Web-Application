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
            <img 
            src={`/${thumbnail}`} 
            alt={type} 
            className='property-thumbnail' 
            />

            <div className='property-info'>

              <p>{type}</p>
              <p>RS. {price.toLocaleString()}</p>
              <p>{bedrooms}</p>
              <p>{tenure}</p>
              <p>{location}</p>
              <p className="propertyDescription">{description}</p>
              <p>{added.month}{added.day},{added.year}</p>

              <div className="viewPropertyBtn">
                <Link to={`/property/${id}`} className="btn btn-outline-primary btn-sm me-2">
                    view property
                </Link>

                <button className="btn btn-primary btn-sm" onClick={()=>addToFavourites(property)}>
                  Add to Favourite
                </button>
              </div>
            </div>

        </div>

    </article>
  );
};

export default PropertyCard;