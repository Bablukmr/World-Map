import { MapContainer, GeoJSON } from "react-leaflet";
import countries from "./data/countries.json";
import "leaflet/dist/leaflet.css";

function MyMap() {

  const countyStyle = {
    fillColor: "yellow",
    fillOpacity: .5,
    color: "black",
  };
  const handleCountry = (country, layer) => {
    layer.on({
      click:(event) => {
        event.target.setStyle(
          {
            fillColor: "#00008b",
            fillOpacity: 1,
          }
        );
      console.log(country);
      },
    });
    layer.bindPopup(`<h2>${country.properties.ADMIN}</h2><p>ISO_A3: ${country.properties.ISO_A3}</p> `);
  };
  
  return (
    <div>
        <h1 style={{ textAlign:"center"}}>World Map</h1>
        <MapContainer
          style={{ height: "80vh" }}
          zoom={2}
          center={[20, 100]}
        >
          <GeoJSON
            onEachFeature={handleCountry}
            style={countyStyle}
            data={countries.features}
          />
        </MapContainer>
      </div>
  );
}

export default MyMap;
