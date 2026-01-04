import React,{ useState } from 'react';
import SearchBar from './components/SearchBar';
import PropertyPage from './components/PropertyPage';
import Gallery from './components/Gallery';
import {Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [searchTerm, setSearchTerm] = useState({
    location: "",
    type: "",
    bedrooms: "",
    minPrice: "",
    maxPrice: "",
    year: ""
  });

  const [favourites,setFavourites]=useState([]);

  return (
    <>
        <Header/>
        <main>
          <Routes>
            {/*Search */}
            <Route path='/' element={
              <div className='main-content'>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                <Gallery
                  searchTerm={searchTerm}
                  favourites={favourites}
                  setFavourites={setFavourites}
                />
              </div>
            }/>

            {/*Prperty Details*/}
            <Route path='/property/:id' element={<PropertyPage/>}/>
          </Routes>
        </main>

        <Footer/>

    </>
  );
}

export default App;

