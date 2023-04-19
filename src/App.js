import logo from "./logo.svg";
import "./App.css";

import busStopsData from "./data/VAG.json";

import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import { Icon, divIcon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

function App() {
  console.log(busStopsData);

  //Generate Map
  return (
    <MapContainer center={[47.997791, 7.842609]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {busStopsData.map((station) => (
        <Marker
          key={station.properties.stop_name}
          position={[
            station.geometry.coordinates[1],
            station.geometry.coordinates[0],
          ]}
        ></Marker>
      ))}
    </MapContainer>
  );
}

export default App;
