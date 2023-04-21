import busStopsData from "../data/VAG.json";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";
import "../assets/style/css/Map.css";

import {
  popupContent,
  popupHead,
  popupText,
  okText,
} from "../assets/style/js/popupStyles.js";

function Map() {
  //Set marker style back to default
  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  //Generate Map
  return (
    <MapContainer center={[47.997791, 7.842609]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerClusterGroup
        chunkedLoading //Performance
      >
        {busStopsData.map((station) => (
          <Marker
            key={station.properties.stop_id}
            position={[
              station.geometry.coordinates[1],
              station.geometry.coordinates[0],
            ]}
            eventHandlers={{
              click: (e) => {
                console.log("marker clicked", station.properties.stop_id);
              },
            }}
          >
            <Popup className="request-popup">
              <div>
                <div style={popupHead}>
                  {station.properties.stop_name.split(",")[1]} <br />
                </div>
                <span style={popupText}>
                  Bus Lines:{" "}
                  {station.properties.routes.map(
                    (route) => route.route_short_name + " "
                  )}
                </span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}

export default Map;
