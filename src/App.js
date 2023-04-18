import logo from './logo.svg';
import './App.css';
import 'leaflet/dist/leaflet.css';
import { busStops } from './data';

import { MapContainer,TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon, divIcon } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';


function App() {
  
  const customIcon = new Icon({
    //iconUrl: 'https://cdn-icons-png.flaticon.com/512/6153/6153497.png', import using cdn (url direct from flaticon)
    iconUrl: require('./assets/logo/marker-icon.png'),
    iconSize: [38, 38] //size of the icon - without that the siye will the the actual size of the image 
  })

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      //iconSize: point(33, 33, true)
    })

  }

  //Generate Map
  return (
    <MapContainer center={[48.8566, 2.3522]} zoom={13}>
      <TileLayer 
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

    <MarkerClusterGroup
      chunkedLoading //help with performance
      iconCreateFunction={createCustomClusterIcon}
    >
      {busStops.map(marker => (
        <Marker position={marker.geocode} icon={customIcon}>
          <Popup><h2>{marker.popUp}</h2></Popup>
        </Marker>
      ))}
    </MarkerClusterGroup>
    </MapContainer>
  );
}

export default App;
