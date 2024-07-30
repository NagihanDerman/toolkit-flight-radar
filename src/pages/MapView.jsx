import "leaflet/dist/leaflet.css";
import { useDispatch, useSelector } from "react-redux";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import { icon } from "leaflet";
import { setPath } from "../redux/slices/flightSlice";

const MapView = ({ setDetailId }) => {
  const { flights, path } = useSelector((store) => store.flightReducer);
  const dispatch = useDispatch();

  // icon oluşturma
  const planeIcon = icon({
    iconUrl: "plane2.png",
    iconSize: [30, 30],
  });

  return (
    <MapContainer center={[39.09, 35.44]} zoom={7} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {flights.map((flight) => (
        <Marker
          icon={planeIcon}
          key={flight.id}
          position={[flight.lat, flight.lng]}
        >
          <Popup>
            <div className="d-flex flex-column gap-2 ">
              <span>Code {flight.code}</span>
              <button onClick={() => setDetailId(flight.id)}>Detail</button>
              <button onClick={() => dispatch(setPath([]))}>Clear Route</button>
            </div>
          </Popup>
        </Marker>
      ))}

      <Polyline positions={path} />
    </MapContainer>
  );
};

export default MapView;
