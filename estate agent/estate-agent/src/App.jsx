import React,{ useState } from "react";
import SearchBar from "./components/SearchBar";
import PropertyPage from './components/PropertyPage'
import propertyCard from './components/ProprertyCard'
import Gallery from './components/Gallery'
import {Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [searchTerm, setSearchTerm] = useState({
    postcodeArea: "",
    type: "",
    bedrooms: "",
    minPrice: "",
    maxPrice: "",
    addedAfter: ""
  });

  return (
    <Routes>
      {/*Search */}
      <Route path='#' element={
        <div>
          <searchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
          <Gallery
             searchTerm={searchTerm}
             favouries={favourites}
             setFavourites={setFavourites}
          />
        </div>
      }/>

      {/*Prperty Details*/}
      <Route path='/property/:id' element={<PropertyPage/>}/>
    </Routes>
  );
}

export default App;

