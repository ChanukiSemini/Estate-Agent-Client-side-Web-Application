import { useState } from "react";
import SearchBar from "./components/SearchBar";

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
    <div className="App">
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </div>
  );
}

export default App;

