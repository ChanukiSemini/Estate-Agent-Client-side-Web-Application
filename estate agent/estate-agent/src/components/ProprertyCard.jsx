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
     shortTitle,
     description,
     thumbnail,
     images,
     floorplan,
     map,
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
        <img 
        src={`/${property.thumbnail}`} 
        alt={property.shortTitle} 
        className='prperty-thumbnail' 
        />

        <div className='property-info'>
          <h3>{property.shortTitle}</h3>

          <p><strong>Type:</strong>{type}</p>
          <p><strong>Price:</strong>RS. {price.toLcalString()}</p>
          <p><strong>Bedrooms:</strong>{bedrooms}</p>
          <p><strong>Tenure: </strong>{tenure}</p>
          <p><strong>Location: </strong>{location}</p>
          <p><strong>Added:</strong>{" "}
          {added.month}{added.day},{added.year}
          </p>
          <p className="propertyDescription">{description}</p>

          <div>
            <Link to={`/property/${id}`}>
                 view property
            </Link>

            <button onClick={()=>addToFavourites(property)}>
              Add to Favourite
            </button>
          </div>

        </div>

    </article>
  );
};

export default PropertyCard;