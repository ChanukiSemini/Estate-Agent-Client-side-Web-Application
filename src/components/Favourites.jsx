import React from 'react';

const Favourites = ({favourites=[],removeFavourite,clearFavourites,addToFavourites}) => {

  const handleDrop=(e)=>{
    e.preventDefault();
    const property=JSON.parse(
      e.dataTransfer.getData("property")
    );
    addToFavourites(property);
  }
  return (
    <aside 
        id="favourites"
        className="favourite-Sidebar"
        onDragOver={(e)=>e.preventDefault()}
        onDrop={handleDrop}
    >
           <div className="favouriteHeader">
            <h3>Favourites</h3>
      
           </div>
           {favourites.length === 0 && <p>Drag and Drop properties Here..</p>}

           <div className="favourite-content">
            {favourites.map((property)=>(
              <div 
                  key={property.id}
                  className="favourite-item"
                  draggable onDragStart={(e)=>
                    e.dataTransfer.setData("propertyId",property.id)
                  }
              >
                  <div className="fav-item-info">
                    <div className="fav-info-firstpart">
                      {/*small Image */}
                      <img src={`${import.meta.env.BASE_URL}${property.thumbnail}`}
                      alt={property.type}
                      className="fav-thumb"/>

                      {/*Property Info */}
                      <div className="fav-details">
                          <p className="fav-price">
                            RS. {property.price.toLocaleString()}
                          </p>
                          <p className="fav-location">
                            {property.location}
                          </p>
                          <p className="fav-type">
                            {property.type}
                        </p>
                      </div>
                    </div>

                    <button className="btn-remove" onClick={()=>removeFavourite(property.id)}>
                      ✕
                    </button>
                  </div>

              </div>
            ))}

           </div>

           {favourites.length>0 &&(
            <button className="clear-Button" onClick={clearFavourites}>
              Clear All
            </button>
           )}

    </aside>
  );
};

export default Favourites;