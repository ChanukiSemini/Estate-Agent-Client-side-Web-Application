import React,{useEffect,useState} from 'react';
import {useParams} from "react-router-dom";
import {Tab, Tabs,TabList,TabPanel } from "react-tabs"

const PropertyPage = () => {
  const {id} = useParams();
  const[property,setProperty]=useState(null);
  const [thumbnail,setThumbnail]=useState("");

  useEffect(()=>{
    fetch(`${import.meta.env.BASE_URL}properties.json`)
    .then((response)=>response.json())
    .then((data)=>{
      const propertyfound=data.properties.find((p)=>p.id===id);
      setProperty(propertyfound);
      setThumbnail(propertyfound.thumbnail);
    })
  },[id]);

  if(!property){
    return <p>Loading....</p>
  }
  
  return (
    <section className="propertyPageSection">
      <div className="PropertyDetails">
        <h1>{property.type}</h1>
        <h2>Price: {property.price}</h2>
        <h3>Location: {property.location}</h3>
      </div>
      <div className="propertyGallery">
        <div className="mainImage">
          <img src={`${import.meta.env.BASE_URL}${thumbnail}`} alt="thumbnail-Image" width="600" />
        </div>
        <div className='other-images'>
             {property.images.map((img,index)=>(
              <img
              key={index}
              src={`${import.meta.env.BASE_URL}${img}`}
              alt={`thumbnail ${index+1}`}
              width="150"
              onClick={()=>setThumbnail(img)}
              style={{cursor:"pointer",margin:"5px"}}/>
             ))}
        </div>
      </div>
        <Tabs>
        <TabList>
          <Tab>Description</Tab>
          <Tab>Floor Plan</Tab>
          <Tab>Map</Tab>
        </TabList>
        <TabPanel>
          <p class="description-tab">
            {property.description}
          </p>
        </TabPanel>
        <TabPanel>
          <img src={`${import.meta.env.BASE_URL}${property.floorplan}`} 
          alt="Floor Plan" 
          className='FloorPlanImg' 
          width="500"/>
        </TabPanel>
        <TabPanel>
          <div className="map-container">
            <iframe src={property.map} 
            width="600"
            height="450"
            loading='lazy'
            title="Google-map"></iframe>
          </div>
        </TabPanel>
      </Tabs>
      
    
      
      
    </section>
    
  );
};

export default PropertyPage;